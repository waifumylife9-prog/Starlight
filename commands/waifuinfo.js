const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const { RARETES } = require('../config');
const WAIFUS_DATA = require('../data/waifus');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifuinfo')
        .setDescription('Voir les informations détaillées d\'une waifu')
        .addStringOption(opt =>
            opt.setName('nom')
                .setDescription('Le nom de la waifu')
                .setRequired(true)),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const nom = interaction.options.getString('nom');

            // Chercher d'abord dans les données statiques
            const waifuData = WAIFUS_DATA.find(w =>
                w.nom.toLowerCase() === nom.toLowerCase() ||
                w.nom.toLowerCase().includes(nom.toLowerCase())
            );

            if (!waifuData) {
                return interaction.editReply(`❌ Aucune waifu nommée **${nom}** trouvée dans le jeu !`);
            }

            const rareteInfo = RARETES[waifuData.rarete] || RARETES['COMMUNE'];

            // Récupérer l'image
            const imageDoc = await WaifuImage.findOne({ nom: waifuData.nom });

            // Vérifier si le joueur la possède
            const possede = await Waifu.findOne({
                proprietaire: interaction.user.id,
                nom: waifuData.nom,
                estVivante: true
            });

            // Compétences formatées
            let competencesText = '';
            if (waifuData.competences && waifuData.competences.length > 0) {
                waifuData.competences.forEach(c => {
                    const typeEmoji = {
                        'passif': '🔰',
                        'actif': '⚡',
                        'ultime': '💫',
                        'lien': '💞'
                    }[c.type] || '❓';
                    competencesText += `${typeEmoji} **${c.nom}** *(Niv. ${c.niveauRequis})*\n${c.description}\n\n`;
                });
            }

            const embed = new EmbedBuilder()
                .setTitle(`${rareteInfo.emoji} ${waifuData.nom}`)
                .setColor(rareteInfo.couleur)
                .addFields(
                    { name: '🌍 Univers', value: waifuData.univers || 'Inconnu', inline: true },
                    { name: `${rareteInfo.emoji} Rareté`, value: rareteInfo.nom, inline: true },
                    { name: '⚡ Type', value: waifuData.type || 'Neutre', inline: true },
                )
                .addFields({
                    name: '📖 Histoire',
                    value: waifuData.description
                        ? waifuData.description.substring(0, 1000) + (waifuData.description.length > 1000 ? '...' : '')
                        : 'Aucune description disponible.',
                    inline: false
                })
                .addFields({
                    name: '✨ Apparence',
                    value: waifuData.apparence || 'Non définie',
                    inline: false
                })
                .addFields(
                    { name: '❤️ HP', value: `${waifuData.stats.hp}`, inline: true },
                    { name: '🛡️ DEF', value: `${waifuData.stats.def}`, inline: true },
                    { name: '⚡ SPD', value: `${waifuData.stats.spd}`, inline: true },
                    { name: '💥 CRIT', value: `${waifuData.stats.crit}`, inline: true },
                    { name: '✨ MGK', value: `${waifuData.stats.mgk}`, inline: true },
                    { name: '🔮 RES', value: `${waifuData.stats.res}`, inline: true },
                );

            if (competencesText) {
                embed.addFields({
                    name: '🎯 Compétences',
                    value: competencesText.substring(0, 1024),
                    inline: false
                });
            }

            embed.addFields({
                name: possede ? '✅ Possession' : '❌ Possession',
                value: possede ? `Tu possèdes cette waifu ! (Niv. **${possede.niveau}**)` : 'Tu ne possèdes pas encore cette waifu.',
                inline: false
            });

            if (imageDoc?.url) embed.setImage(imageDoc.url);

            embed.setFooter({ text: '✨ Starlight' });

            return interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Erreur waifuinfo:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};