const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');
const Base = require('../models/Base');
const { tirerRarete, genererStats } = require('../utils/gacha');
const { RARETES } = require('../config');
const WAIFUS = require('../data/waifus');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invoquer')
        .setDescription('Invoquer une waifu avec une clé')
        .addIntegerOption(option =>
            option.setName('quantite')
                .setDescription('Nombre d\'invocations (1 ou 10)')
                .setRequired(false)
                .addChoices(
                    { name: '1 invocation', value: 1 },
                    { name: '10 invocations', value: 10 },
                )),

    async execute(interaction) {
        await interaction.deferReply();

        const userId = interaction.user.id;
        const username = interaction.user.username;
        const quantite = interaction.options.getInteger('quantite') || 1;

        // Récupérer ou créer le joueur
        let player = await Player.findOne({ userId });
        if (!player) {
            player = await Player.create({ userId, username });
        }

        // Vérifier les clés
        if (player.cles < quantite) {
            return interaction.editReply(`❌ Tu n'as pas assez de clés ! Tu en as **${player.cles}** et il t'en faut **${quantite}**.`);
        }

        // Vérifier la capacité de la base
        let base = await Base.findOne({ proprietaire: userId });
        if (!base) {
            base = await Base.create({ proprietaire: userId });
        }

        const waifusActuelles = await Waifu.countDocuments({ proprietaire: userId, estVivante: true });
        if (waifusActuelles + quantite > base.capaciteWaifus) {
            return interaction.editReply(`❌ Ta base est pleine ! Capacité : **${waifusActuelles}/${base.capaciteWaifus}**. Construis des dortoirs !`);
        }

        // Effectuer les invocations
        const waifusObtenues = [];
        for (let i = 0; i < quantite; i++) {
            const rarete = tirerRarete();
            
            // Filtrer les waifus disponibles selon la rareté
            const waifusDispo = WAIFUS.filter(w => w.rarete === rarete);
            
            // Si aucune waifu de cette rareté, prendre une commune
            const pool = waifusDispo.length > 0 ? waifusDispo : WAIFUS.filter(w => w.rarete === 'COMMUNE');
            const waifuData = pool[Math.floor(Math.random() * pool.length)];
            
            const stats = waifuData.stats || genererStats(rarete);

            const waifu = await Waifu.create({
                nom: waifuData.nom,
                description: waifuData.description,
                apparence: waifuData.apparence,
                rarete,
                type: waifuData.type || 'Neutre',
                stats,
                competences: waifuData.competences || [],
                proprietaire: userId,
            });

            player.waifus.push(waifu._id);
            waifusObtenues.push({ ...waifuData, rarete });
        }

        // Déduire les clés
        player.cles -= quantite;
        player.statistiques.waifusInvoquees += quantite;
        await player.save();

        // Construire l'embed de réponse
        if (quantite === 1) {
            const { nom, rarete, stats, description, univers } = waifusObtenues[0];
            const rareteInfo = RARETES[rarete];

            const embed = new EmbedBuilder()
                .setTitle(`✨ Invocation !`)
                .setDescription(`*${description.substring(0, 200)}...*`)
                .addFields(
                    { name: '🌸 Waifu', value: `**${nom}**`, inline: true },
                    { name: `${rareteInfo.emoji} Rareté`, value: rareteInfo.nom, inline: true },
                    { name: '🌍 Univers', value: univers || 'Inconnu', inline: true },
                    { name: '❤️ HP', value: `${stats.hp}`, inline: true },
                    { name: '🛡️ DEF', value: `${stats.def}`, inline: true },
                    { name: '⚡ SPD', value: `${stats.spd}`, inline: true },
                    { name: '💥 CRIT', value: `${stats.crit}`, inline: true },
                    { name: '✨ MGK', value: `${stats.mgk}`, inline: true },
                    { name: '🔮 RES', value: `${stats.res}`, inline: true },
                )
                .setColor(rareteInfo.couleur)
                .setFooter({ text: `🗝️ Clés restantes : ${player.cles}` });

            return interaction.editReply({ embeds: [embed] });
        } else {
            // Invocation x10
            let description = '';
            for (const { nom, rarete, univers } of waifusObtenues) {
                const rareteInfo = RARETES[rarete];
                description += `${rareteInfo.emoji} **${nom}** (${univers || 'Inconnu'}) — ${rareteInfo.nom}\n`;
            }

            const embed = new EmbedBuilder()
                .setTitle(`✨ Invocation x10 !`)
                .setDescription(description)
                .setColor(0xFFD700)
                .setFooter({ text: `🗝️ Clés restantes : ${player.cles}` });

            return interaction.editReply({ embeds: [embed] });
        }
    }
}