const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const { RARETES, LIENS } = require('../config');
const resolveWaifu = require('../utils/resolveWaifu');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lien')
        .setDescription('Gérer le lien avec une waifu')
        .addSubcommand(sub =>
            sub.setName('voir')
                .setDescription('Voir le niveau de lien avec une waifu')
                .addStringOption(opt =>
                    opt.setName('nom')
                        .setDescription('Le nom de ta waifu (ex: Amber ou Amber #2)')
                        .setRequired(true))),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const userId = interaction.user.id;
            const sub = interaction.options.getSubcommand();

            if (sub === 'voir') {
                const nom = interaction.options.getString('nom');

                const { waifu, erreur } = await resolveWaifu(userId, nom);
                if (erreur) return interaction.editReply(erreur);

                const lienPoints = waifu.lien || 0;

                // Déterminer le stade actuel
                let stadeActuel = LIENS.INCONNUE;
                let stadeLabel = 'INCONNUE';

                for (const [cle, stade] of Object.entries(LIENS)) {
                    if (lienPoints >= stade.seuil) {
                        stadeActuel = stade;
                        stadeLabel = cle;
                    }
                }

                // Prochain stade
                const stades = Object.entries(LIENS);
                const indexActuel = stades.findIndex(([cle]) => cle === stadeLabel);
                const prochainStade = stades[indexActuel + 1];

                // Barre de progression
                let barreProgression = '';
                if (prochainStade) {
                    const pointsVersProchain = prochainStade[1].seuil - stadeActuel.seuil;
                    const pointsActuels = lienPoints - stadeActuel.seuil;
                    const pourcent = Math.min(Math.floor((pointsActuels / pointsVersProchain) * 10), 10);
                    barreProgression = '█'.repeat(pourcent) + '░'.repeat(10 - pourcent);
                } else {
                    barreProgression = '█'.repeat(10);
                }

                const rareteInfo = RARETES[waifu.rarete] || RARETES['COMMUNE'];
                const imageDoc = await WaifuImage.findOne({ nom: waifu.nom });

                const derniereInteraction = waifu.dernierInteraction
                    ? `<t:${Math.floor(new Date(waifu.dernierInteraction).getTime() / 1000)}:R>`
                    : 'Jamais';

                const nomAffiche = waifu.index > 1 ? `${waifu.nom} #${waifu.index}` : waifu.nom;

                const embed = new EmbedBuilder()
                    .setTitle(`💞 Lien avec ${nomAffiche}`)
                    .setColor(rareteInfo.couleur)
                    .setDescription(`${stadeActuel.coeurs}\n**${stadeActuel.nom}**`)
                    .addFields(
                        { name: `${rareteInfo.emoji} Rareté`, value: rareteInfo.nom, inline: true },
                        { name: '💫 Points de lien', value: `**${lienPoints}**`, inline: true },
                        { name: '🕐 Dernière interaction', value: derniereInteraction, inline: true },
                    );

                if (prochainStade) {
                    embed.addFields({
                        name: `📈 Progression vers ${prochainStade[1].nom}`,
                        value: `\`${barreProgression}\` ${lienPoints - stadeActuel.seuil}/${prochainStade[1].seuil - stadeActuel.seuil} pts`,
                        inline: false,
                    });
                } else {
                    embed.addFields({
                        name: '✨ Lien Maximum',
                        value: 'Vous êtes liées pour toujours 💕',
                        inline: false,
                    });
                }

                embed.setFooter({ text: '💡 Utilise /lien interagir, nourrir, cadeau ou repos pour augmenter le lien !' });

                if (imageDoc?.url) embed.setThumbnail(imageDoc.url);

                return interaction.editReply({ embeds: [embed] });
            }

        } catch (error) {
            console.error('Erreur lien:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};