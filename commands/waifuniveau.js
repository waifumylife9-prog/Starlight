const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const { RARETES } = require('../config');

const STATS_INFO = {
    hp: { emoji: '❤️', nom: 'HP', description: 'Points de vie' },
    def: { emoji: '🛡️', nom: 'DEF', description: 'Défense physique' },
    spd: { emoji: '⚡', nom: 'SPD', description: 'Vitesse' },
    crit: { emoji: '💥', nom: 'CRIT', description: 'Taux de critique' },
    mgk: { emoji: '✨', nom: 'MGK', description: 'Magie' },
    res: { emoji: '🔮', nom: 'RES', description: 'Résistance magique' },
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifuniveau')
        .setDescription('Gérer le niveau et les stats d\'une waifu')
        .addStringOption(opt =>
            opt.setName('nom')
                .setDescription('Le nom de ta waifu')
                .setRequired(true))
        .addStringOption(opt =>
            opt.setName('stat')
                .setDescription('La stat à augmenter')
                .setRequired(false)
                .addChoices(
                    { name: '❤️ HP', value: 'hp' },
                    { name: '🛡️ DEF', value: 'def' },
                    { name: '⚡ SPD', value: 'spd' },
                    { name: '💥 CRIT', value: 'crit' },
                    { name: '✨ MGK', value: 'mgk' },
                    { name: '🔮 RES', value: 'res' },
                )),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const userId = interaction.user.id;
            const nom = interaction.options.getString('nom');
            const stat = interaction.options.getString('stat');

            // Trouver la waifu
            const waifu = await Waifu.findOne({
                proprietaire: userId,
                nom: { $regex: nom, $options: 'i' },
                estVivante: true
            });

            if (!waifu) {
                return interaction.editReply(`❌ Tu n'as pas de waifu nommée **${nom}** !`);
            }

            // Si une stat est fournie, l'augmenter
            if (stat) {
                if (waifu.pointsStat <= 0) {
                    return interaction.editReply(`❌ **${waifu.nom}** n'a pas de points de stat disponibles ! Fais-la combattre pour gagner de l'XP.`);
                }

                const bonus = stat === 'hp' ? 20 : 5;
                waifu.stats[stat] += bonus;
                waifu.pointsStat -= 1;
                await waifu.save();

                const statInfo = STATS_INFO[stat];
                return interaction.editReply(`✅ **${waifu.nom}** : ${statInfo.emoji} ${statInfo.nom} augmentée de **+${bonus}** ! (${waifu.pointsStat} points restants)`);
            }

            // Sinon afficher les infos de niveau
            const imageDoc = await WaifuImage.findOne({ nom: waifu.nom });
            const rareteInfo = RARETES[waifu.rarete] || RARETES['COMMUNE'];

            // XP nécessaire pour le prochain niveau
            const xpRequis = waifu.niveau * 100;
            const xpPourcent = Math.floor((waifu.xp / xpRequis) * 10);
            const barreXp = '█'.repeat(xpPourcent) + '░'.repeat(10 - xpPourcent);

            // Compétences débloquées
            const niveauxCles = [10, 25, 50, 100];
            const prochainNiveau = niveauxCles.find(n => n > waifu.niveau);

            const embed = new EmbedBuilder()
                .setTitle(`📊 ${waifu.nom} — Niveau ${waifu.niveau}`)
                .setColor(rareteInfo.couleur)
                .addFields(
                    { name: '📈 XP', value: `${waifu.xp}/${xpRequis}\n\`${barreXp}\``, inline: false },
                    { name: '🎯 Points de stat', value: `**${waifu.pointsStat}** points disponibles`, inline: true },
                    { name: '🔓 Prochain déblocage', value: prochainNiveau ? `Niveau **${prochainNiveau}**` : '✅ Tout débloqué !', inline: true },
                )
                .addFields(
                    { name: '❤️ HP', value: `${waifu.stats.hp}`, inline: true },
                    { name: '🛡️ DEF', value: `${waifu.stats.def}`, inline: true },
                    { name: '⚡ SPD', value: `${waifu.stats.spd}`, inline: true },
                    { name: '💥 CRIT', value: `${waifu.stats.crit}`, inline: true },
                    { name: '✨ MGK', value: `${waifu.stats.mgk}`, inline: true },
                    { name: '🔮 RES', value: `${waifu.stats.res}`, inline: true },
                )
                .setFooter({ text: `💡 Utilise /waifuniveau nom:${waifu.nom} stat:[stat] pour dépenser des points` });

            if (imageDoc?.url) embed.setThumbnail(imageDoc.url);

            return interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Erreur waifuniveau:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};