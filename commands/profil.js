const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');

const GENRES = {
    'femboy_soumise': { label: 'Femboy Soumise', emoji: '🌸', couleur: 0xFFB7C5 },
    'femme_dominante': { label: 'Femme Dominante', emoji: '👑', couleur: 0x9B59B6 },
    'femme_soumise': { label: 'Femme Soumise', emoji: '🌷', couleur: 0xFF69B4 },
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profil')
        .setDescription('Afficher le profil d\'un joueur')
        .addUserOption(option =>
            option.setName('joueur')
                .setDescription('Le joueur dont voir le profil (vide = ton profil)')
                .setRequired(false)),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const target = interaction.options.getUser('joueur') || interaction.user;
            const player = await Player.findOne({ userId: target.id });

            if (!player) {
                return interaction.editReply(`❌ **${target.username}** n'a pas encore de profil ! Utilise \`/editprofil nom\` pour commencer.`);
            }

            const oc = player.oc || {};
            const genre = GENRES[oc.genre] || GENRES['femme_soumise'];

            // Stats
            const waifusTotal = player.statistiques?.waifusInvoquees || 0;
            const combatsGagnes = player.statistiques?.combatsGagnes || 0;
            const raidsEffectues = player.statistiques?.raidsEffectues || player.statistiques?.raidsLances || 0;
            const cles = player.cles || 0;

            // Waifu favorite
            let waifuFavorite = null;
            if (oc.waifuFavoriteId) {
                waifuFavorite = await Waifu.findById(oc.waifuFavoriteId);
            }

            // Niveau moyen
            const waifus = await Waifu.find({ proprietaire: target.id, estVivante: true });
            const niveauMoyen = waifus.length > 0
                ? Math.round(waifus.reduce((acc, w) => acc + (w.niveau || 1), 0) / waifus.length)
                : 0;

            // Date d'arrivée
            const dateArrivee = player.dateCreation || player.createdAt
                ? new Date(player.dateCreation || player.createdAt).toLocaleDateString('fr-FR')
                : 'Inconnue';

            // Construction embed
            const embed = new EmbedBuilder()
                .setColor(genre.couleur)
                .setAuthor({
                    name: `${genre.emoji} ${oc.nom || target.username}`,
                    iconURL: target.displayAvatarURL({ extension: 'png', size: 256 })
                })
                .setFooter({ text: `✨ Starlight • Arrivée le ${dateArrivee}` });

            // Titre
            if (oc.titre) {
                embed.setDescription(`✦ *${oc.titre}* ✦`);
            }

            // Faction
            if (oc.faction) {
                embed.addFields({
                    name: '⚔️ Faction',
                    value: oc.faction,
                    inline: true
                });
            }

            // Genre
            embed.addFields({
                name: '🎭 Identité',
                value: `${genre.emoji} ${genre.label}`,
                inline: true
            });

            // Bio
            if (oc.bio) {
                embed.addFields({
                    name: '📖 Biographie',
                    value: `*"${oc.bio}"*`,
                    inline: false
                });
            }

            // Image apparence OC
            const app = oc.apparence || {};
            if (app.imageUrl) {
                embed.setImage(app.imageUrl);
            }

            // Séparateur stats
            embed.addFields({
                name: '━━━━━━━━━━━━━━━━━━━━━━',
                value: '📊 **Statistiques**',
                inline: false
            });

            // Stats
            embed.addFields(
                { name: '✨ Invocations', value: waifusTotal.toString(), inline: true },
                { name: '⚔️ Combats', value: combatsGagnes.toString(), inline: true },
                { name: '💥 Raids', value: raidsEffectues.toString(), inline: true },
                { name: '🗝️ Clés', value: cles.toString(), inline: true },
                { name: '📊 Niv. moyen', value: niveauMoyen.toString(), inline: true },
                { name: '👘 Waifus', value: waifus.length.toString(), inline: true },
            );

            // Waifu favorite
            if (waifuFavorite) {
                embed.addFields({
                    name: '💞 Waifu Favorite',
                    value: `**${waifuFavorite.nom}** *(${waifuFavorite.univers || 'Inconnu'})*`,
                    inline: false
                });
            }

            return interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Erreur profil:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};