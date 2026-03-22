const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const { createCanvas, loadImage, registerFont } = require('canvas');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');

const GENRES = {
    'femboy_soumise': { label: 'Femboy Soumise', emoji: '🌸', couleur: '#FFB7C5' },
    'femme_dominante': { label: 'Femme Dominante', emoji: '👑', couleur: '#9B59B6' },
    'femme_soumise': { label: 'Femme Soumise', emoji: '🌷', couleur: '#FF69B4' },
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
                return interaction.editReply(`❌ **${target.username}** n'a pas encore de profil ! Utilise \`/editprofil\` pour en créer un.`);
            }

            const oc = player.oc || {};
            const genre = GENRES[oc.genre] || GENRES['femme_soumise'];

            // Stats
            const waifusTotal = player.statistiques?.waifusInvoquees || 0;
            const combatsGagnes = player.statistiques?.combatsGagnes || 0;
            const raidsEffectues = player.statistiques?.raidsEffectues || 0;
            const cles = player.cles || 0;

            // Waifu favorite
            let waifuFavorite = null;
            if (oc.waifuFavoriteId) {
                waifuFavorite = await Waifu.findById(oc.waifuFavoriteId);
            }

            // Niveau moyen
            const waifus = await Waifu.find({ proprietaire: target.id, estVivante: true });
            const niveauMoyen = waifus.length > 0
                ? Math.round(waifus.reduce((acc, w) => acc + w.niveau, 0) / waifus.length)
                : 0;

            // Date d'arrivée
            const dateArrivee = player.dateCreation
                ? new Date(player.dateCreation).toLocaleDateString('fr-FR')
                : 'Inconnue';

            // ═══════════════════════════════
            // GÉNÉRATION DE L'IMAGE CANVAS
            // ═══════════════════════════════
            const width = 800;
            const height = 500;
            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');

            // Fond dégradé sombre
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#0a0a1a');
            gradient.addColorStop(0.5, '#1a0a2e');
            gradient.addColorStop(1, '#0a1a1a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Effet de grille cyber
            ctx.strokeStyle = 'rgba(100, 50, 200, 0.1)';
            ctx.lineWidth = 1;
            for (let x = 0; x < width; x += 40) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += 40) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Bordure lumineuse
            const borderGrad = ctx.createLinearGradient(0, 0, width, height);
            borderGrad.addColorStop(0, genre.couleur);
            borderGrad.addColorStop(0.5, '#ffffff');
            borderGrad.addColorStop(1, genre.couleur);
            ctx.strokeStyle = borderGrad;
            ctx.lineWidth = 3;
            ctx.strokeRect(10, 10, width - 20, height - 20);

            // Ligne décorative en haut
            ctx.fillStyle = genre.couleur;
            ctx.fillRect(10, 10, width - 20, 4);

            // Avatar Discord
            try {
                const avatarURL = target.displayAvatarURL({ extension: 'png', size: 256 });
                const avatar = await loadImage(avatarURL);

                // Cercle avatar avec glow
                ctx.save();
                ctx.shadowColor = genre.couleur;
                ctx.shadowBlur = 20;
                ctx.beginPath();
                ctx.arc(100, 120, 70, 0, Math.PI * 2);
                ctx.clip();
                ctx.drawImage(avatar, 30, 50, 140, 140);
                ctx.restore();

                // Bordure cercle
                ctx.strokeStyle = genre.couleur;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(100, 120, 70, 0, Math.PI * 2);
                ctx.stroke();
            } catch (e) {
                // Avatar par défaut si erreur
                ctx.fillStyle = genre.couleur;
                ctx.beginPath();
                ctx.arc(100, 120, 70, 0, Math.PI * 2);
                ctx.fill();
            }

            // Badge genre
            ctx.fillStyle = genre.couleur + '33';
            roundRect(ctx, 30, 205, 140, 30, 15);
            ctx.fill();
            ctx.fillStyle = genre.couleur;
            ctx.font = 'bold 13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(genre.emoji + ' ' + genre.label, 100, 225);

            // Nom de l'OC
            ctx.textAlign = 'left';
            ctx.shadowColor = genre.couleur;
            ctx.shadowBlur = 15;
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 32px Arial';
            ctx.fillText(oc.nom || target.username, 200, 80);
            ctx.shadowBlur = 0;

            // Titre
            if (oc.titre) {
                ctx.fillStyle = genre.couleur;
                ctx.font = 'italic 16px Arial';
                ctx.fillText('✦ ' + oc.titre + ' ✦', 200, 105);
            }

            // Faction
            if (oc.faction) {
                ctx.fillStyle = 'rgba(255,255,255,0.6)';
                ctx.font = '14px Arial';
                ctx.fillText('⚔️ Faction : ' + oc.faction, 200, 130);
            }

            // Séparateur
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(200, 145);
            ctx.lineTo(760, 145);
            ctx.stroke();

            // Apparence
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.font = '13px Arial';
            let apparenceText = '';
            if (oc.apparence) {
                if (oc.apparence.cheveux) apparenceText += `💇 ${oc.apparence.cheveux}  `;
                if (oc.apparence.yeux) apparenceText += `👁️ ${oc.apparence.yeux}  `;
                if (oc.apparence.taille) apparenceText += `📏 ${oc.apparence.taille}`;
            }
            ctx.fillText(apparenceText || 'Apparence non définie', 200, 168);

            // Bio
            if (oc.bio) {
                ctx.fillStyle = 'rgba(255,255,255,0.8)';
                ctx.font = 'italic 13px Arial';
                const bioTronquee = oc.bio.length > 120 ? oc.bio.substring(0, 120) + '...' : oc.bio;
                ctx.fillText('"' + bioTronquee + '"', 200, 195);
            }

            // ═══ STATS ═══
            const statsY = 250;
            const statsData = [
                { label: '✨ Invocations', value: waifusTotal.toString() },
                { label: '⚔️ Combats', value: combatsGagnes.toString() },
                { label: '💥 Raids', value: raidsEffectues.toString() },
                { label: '🗝️ Clés', value: cles.toString() },
                { label: '📊 Niv. moyen', value: niveauMoyen.toString() },
                { label: '📅 Arrivée', value: dateArrivee },
            ];

            statsData.forEach((stat, i) => {
                const col = i % 3;
                const row = Math.floor(i / 3);
                const x = 30 + col * 250;
                const y = statsY + row * 70;

                // Carte stat
                ctx.fillStyle = 'rgba(255,255,255,0.05)';
                roundRect(ctx, x, y, 230, 55, 10);
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.1)';
                ctx.lineWidth = 1;
                roundRect(ctx, x, y, 230, 55, 10);
                ctx.stroke();

                ctx.fillStyle = 'rgba(255,255,255,0.5)';
                ctx.font = '12px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(stat.label, x + 10, y + 20);

                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 20px Arial';
                ctx.fillText(stat.value, x + 10, y + 45);
            });

            // Waifu favorite
            if (waifuFavorite) {
                ctx.fillStyle = genre.couleur;
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'left';
                ctx.fillText('💞 Waifu favorite : ' + waifuFavorite.nom, 30, 460);
            }

            // Watermark
            ctx.fillStyle = 'rgba(255,255,255,0.15)';
            ctx.font = '11px Arial';
            ctx.textAlign = 'right';
            ctx.fillText('✨ Starlight', width - 20, height - 15);

            // Envoyer l'image
            const buffer = canvas.toBuffer('image/png');
            const attachment = new AttachmentBuilder(buffer, { name: 'profil.png' });
            return interaction.editReply({ files: [attachment] });

        } catch (error) {
            console.error('Erreur profil:', error);
            return interaction.editReply('❌ Une erreur est survenue !');
        }
    }
};

function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}