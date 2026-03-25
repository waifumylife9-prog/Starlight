const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const { RARETES } = require('../config');

const ORDRE_RARETE = ['WAIFU', 'MYTHIQUE', 'LEGENDAIRE', 'EPIQUE', 'RARE', 'PEU_COMMUNE', 'COMMUNE'];

function trierWaifus(waifus) {
    return waifus.sort((a, b) => {
        const indexA = ORDRE_RARETE.indexOf(a.rarete);
        const indexB = ORDRE_RARETE.indexOf(b.rarete);
        return indexA - indexB;
    });
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

            const totalPages = Math.ceil(waifus.length / 10);
            let page = 0;

            const buildEmbed = async (p) => {
                const slice = waifus.slice(p * 10, p * 10 + 10);

                // Récupérer les images de toutes les waifus de la page
                const noms = slice.map(w => w.nom);
                const images = await WaifuImage.find({ nom: { $in: noms } });
                const imageMap = {};
                images.forEach(img => imageMap[img.nom] = img.url);

                const premierRarete = RARETES[slice[0]?.rarete] || RARETES['COMMUNE'];

                const embed = new EmbedBuilder()
                    .setColor(premierRarete.couleur)
                    .setTitle(`✨ Collection de ${target.username}`)
                    .setFooter({ text: `Page ${p + 1}/${totalPages} • ${waifus.length} waifu(s) au total` });

                let desc = '';
                if (filtreRarete) desc += `Filtre : **${RARETES[filtreRarete]?.nom}**\n`;
                if (filtreUnivers) desc += `Univers : **${filtreUnivers}**\n`;
                if (desc) desc += '\n';

                slice.forEach(w => {
                    const r = RARETES[w.rarete] || RARETES['COMMUNE'];
                    const img = imageMap[w.nom] ? '🖼️' : '';
                    desc += `${r.emoji} **${w.nom}** ${img} — Niv.**${w.niveau || 1}** • *${w.univers || 'Inconnu'}*\n`;
                });

                embed.setDescription(desc);

                // Thumbnail = image de la première waifu de la page
                if (imageMap[slice[0]?.nom]) {
                    embed.setThumbnail(imageMap[slice[0].nom]);
                }

                return embed;
            };

            const embed = await buildEmbed(page);
            const buttons = buildButtons(page, totalPages);

            const msg = await interaction.editReply({
                embeds: [embed],
                components: totalPages > 1 ? [buttons] : []
            });

            if (totalPages <= 1) return;

            const collector = msg.createMessageComponentCollector({ time: 120000 });

            collector.on('collect', async i => {
                if (i.user.id !== interaction.user.id) {
                    return i.reply({ content: '❌ C\'est pas ta collection !', ephemeral: true });
                }

                if (i.customId === 'prev') page--;
                if (i.customId === 'next') page++;

                const newEmbed = await buildEmbed(page);
                const newButtons = buildButtons(page, totalPages);

                await i.update({ embeds: [newEmbed], components: [newButtons] });
            });

            collector.on('end', async () => {
                try { await msg.edit({ components: [] }); } catch (e) {}
            });

        } catch (error) {
            console.error('Erreur collection:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};