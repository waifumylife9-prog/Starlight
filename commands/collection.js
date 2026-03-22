const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } = require('discord.js');
const Waifu = require('../models/Waifu');
const { RARETES } = require('../config');
const WAIFUS_DATA = require('../data/waifus');

const ORDRE_RARETE = ['WAIFU', 'MYTHIQUE', 'LEGENDAIRE', 'EPIQUE', 'RARE', 'PEU_COMMUNE', 'COMMUNE'];

function getWaifuImage(nom) {
    const data = WAIFUS_DATA.find(w => w.nom === nom);
    return data?.image || null;
}

function trierWaifus(waifus) {
    return waifus.sort((a, b) => {
        const indexA = ORDRE_RARETE.indexOf(a.rarete);
        const indexB = ORDRE_RARETE.indexOf(b.rarete);
        return indexA - indexB;
    });
}

function buildEmbed(waifus, page, totalPages, target, filtreRarete, filtreUnivers) {
    const rarete = RARETES[waifus[0]?.rarete] || RARETES['COMMUNE'];
    
    const embed = new EmbedBuilder()
        .setColor(rarete?.couleur || 0x9B59B6)
        .setTitle(`✨ Collection de ${target.username}`)
        .setFooter({ text: `Page ${page + 1}/${totalPages} • ${waifus.length} waifus affichées` });

    if (filtreRarete) embed.setDescription(`Filtre rareté : **${RARETES[filtreRarete]?.nom || filtreRarete}**`);
    if (filtreUnivers) embed.setDescription((embed.data.description || '') + ` • Filtre univers : **${filtreUnivers}**`);

    const start = page * 10;
    const slice = waifus.slice(start, start + 10);

    let description = '';
    slice.forEach((w, i) => {
        const r = RARETES[w.rarete] || RARETES['COMMUNE'];
        const img = getWaifuImage(w.nom);
        description += `${r.emoji} **${w.nom}** — Niv.**${w.niveau || 1}** • *${w.univers || 'Inconnu'}*\n`;
    });

    embed.setDescription((embed.data.description ? embed.data.description + '\n\n' : '') + description);

    // Thumbnail = image de la première waifu de la page
    const firstWaifu = WAIFUS_DATA.find(w => w.nom === slice[0]?.nom);
    if (firstWaifu?.image) embed.setThumbnail(firstWaifu.image);

    return embed;
}

function buildButtons(page, totalPages) {
    return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId('prev')
            .setLabel('◀ Précédent')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page === 0),
        new ButtonBuilder()
            .setCustomId('next')
            .setLabel('Suivant ▶')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(page >= totalPages - 1),
    );
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('collection')
        .setDescription('Voir sa collection de waifus')
        .addUserOption(opt =>
            opt.setName('joueur')
                .setDescription('Le joueur dont voir la collection (vide = toi)')
                .setRequired(false))
        .addStringOption(opt =>
            opt.setName('rarete')
                .setDescription('Filtrer par rareté')
                .setRequired(false)
                .addChoices(
                    { name: '🌸 Waifu', value: 'WAIFU' },
                    { name: '🟥 Mythique', value: 'MYTHIQUE' },
                    { name: '🟨 Légendaire', value: 'LEGENDAIRE' },
                    { name: '🟪 Épique', value: 'EPIQUE' },
                    { name: '🟦 Rare', value: 'RARE' },
                    { name: '🟩 Peu commune', value: 'PEU_COMMUNE' },
                    { name: '⬜ Commune', value: 'COMMUNE' },
                ))
        .addStringOption(opt =>
            opt.setName('univers')
                .setDescription('Filtrer par univers (ex: Genshin Impact)')
                .setRequired(false)),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const target = interaction.options.getUser('joueur') || interaction.user;
            const filtreRarete = interaction.options.getString('rarete');
            const filtreUnivers = interaction.options.getString('univers');

            let query = { proprietaire: target.id, estVivante: true };
            if (filtreRarete) query.rarete = filtreRarete;
            if (filtreUnivers) query.univers = { $regex: filtreUnivers, $options: 'i' };

            let waifus = await Waifu.find(query);

            if (waifus.length === 0) {
                return interaction.editReply(`❌ **${target.username}** n'a aucune waifu${filtreRarete || filtreUnivers ? ' avec ces filtres' : ''} !`);
            }

            waifus = trierWaifus(waifus);

            let page = 0;
            const totalPages = Math.ceil(waifus.length / 10);

            const embed = buildEmbed(waifus, page, totalPages, target, filtreRarete, filtreUnivers);
            const buttons = buildButtons(page, totalPages);

            const msg = await interaction.editReply({
                embeds: [embed],
                components: totalPages > 1 ? [buttons] : []
            });

            if (totalPages <= 1) return;

            // Collecteur de boutons
            const collector = msg.createMessageComponentCollector({ time: 120000 });

            collector.on('collect', async i => {
                if (i.user.id !== interaction.user.id) {
                    return i.reply({ content: '❌ C\'est pas ta collection !', ephemeral: true });
                }

                if (i.customId === 'prev') page--;
                if (i.customId === 'next') page++;

                const newEmbed = buildEmbed(waifus, page, totalPages, target, filtreRarete, filtreUnivers);
                const newButtons = buildButtons(page, totalPages);

                await i.update({ embeds: [newEmbed], components: [newButtons] });
            });

            collector.on('end', async () => {
                try {
                    await msg.edit({ components: [] });
                } catch (e) {}
            });

        } catch (error) {
            console.error('Erreur collection:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};