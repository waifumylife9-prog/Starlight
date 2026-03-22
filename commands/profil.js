const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const { createCanvas, loadImage } = require('@napi-rs/canvas');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');

const GENRES = {
    'femboy_soumise': { label: 'Femboy Soumise', emoji: '🌸', couleur: '#FFB7C5' },
    'femme_dominante': { label: 'Femme Dominante', emoji: '👑', couleur: '#9B59B6' },
    'femme_soumise': { label: 'Femme Soumise', emoji: '🌷', couleur: '#FF69B4' },
};

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

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

            // ═══════════════════════════════
            // CANVAS
            // ═══════════════════════════════
            const width = 820;
            const height = 520;
            const canvas = createCanvas(width, height);
            const ctx = canvas.getContext('2d');

            // Fond dégradé sombre
            const gradient = ctx.createLinearGradient(0, 0, width, height);
            gradient.addColorStop(0, '#0a0a1a');
            gradient.addColorStop(0.5, '#1a0a2e');
            gradient.addColorStop(1, '#0a1a1a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Grille cyber subtile
            ctx.strokeStyle = 'rgba(100, 50, 200, 0.08)';
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

            // Bordure extérieure lumineuse
            const borderGrad = ctx.createLinearGradient(0, 0, width, height);
            borderGrad.addColorStop(0, genre.couleur);
            borderGrad.addColorStop(0.5, '#ffffff');
            borderGrad.addColorStop(1, genre.couleur);
            ctx.strokeStyle = borderGrad;
            ctx.lineWidth = 3;
            roundRect(ctx, 10, 10, width - 20, height - 20, 15);
            ctx.stroke();

            // Ligne déco top
            ctx.fillStyle = genre.couleur;
            ctx.fillRect(10, 10, width - 20, 4);

            // ═══ AVATAR ═══
            try {
                const avatarURL = target.displayAvatarURL({ extension: 'png', size: 256 });
                const avatar = await loadImage(avatarURL);
                ctx.save();
                ctx.beginPath();
                ctx.arc(110, 130, 75, 0, Math.PI * 2);
                ctx.clip();
                ctx.drawImage(avatar, 35, 55, 150, 150);
                ctx.restore();

                // Cercle bordure avatar
                ctx.strokeStyle = genre.couleur;
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(110, 130, 75, 0, Math.PI * 2);
                ctx.stroke();
            } catch (e) {
                ctx.fillStyle = genre.couleur;
                ctx.beginPath();
                ctx.arc(110, 130, 75, 0, Math.PI * 2);
                ctx.fill();
            }

            // Badge genre sous avatar
            ctx.fillStyle = genre.couleur + '44';
            roundRect(ctx, 35, 220, 150, 28, 14);
            ctx.fill();
            ctx.strokeStyle = genre.couleur;
            ctx.lineWidth = 1;
            roundRect(ctx, 35, 220, 150, 28, 14);
            ctx.stroke();
            ctx.fillStyle = genre.couleur;
            ctx.font = 'bold 12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(genre.emoji + ' ' + genre.label, 110, 239);

            // ═══ NOM OC ═══
            ctx.textAlign = 'left';
            ctx.shadowColor = genre.couleur;
            ctx.shadowBlur = 20;
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 34px sans-serif';
            ctx.fillText(oc.nom || target.username, 210, 85);
            ctx.shadowBlur = 0;

            // Titre
            if (oc.titre) {
                ctx.fillStyle = genre.couleur;
                ctx.font = 'italic 15px sans-serif';
                ctx.fillText('✦ ' + oc.titre + ' ✦', 212, 112);
            }

            // Faction
            if (oc.faction) {
                ctx.fillStyle = 'rgba(255,255,255,0.65)';
                ctx.font = '14px sans-serif';
                ctx.fillText('⚔️  ' + oc.faction, 212, 138);
            }

            // Séparateur
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(210, 152);
            ctx.lineTo(790, 152);
            ctx.stroke();

            // Apparence
            const app = oc.apparence || {};
            let appParts = [];
            if (app.cheveux) appParts.push('💇 ' + app.cheveux);
            if (app.yeux) appParts.push('👁️ ' + app.yeux);
            if (app.taille) appParts.push('📏 ' + app.taille);
            if (app.morphologie) appParts.push('🧍 ' + app.morphologie);
            if (app.tenue) appParts.push('👗 ' + app.tenue);

            ctx.fillStyle = 'rgba(255,255,255,0.55)';
            ctx.font = '13px sans-serif';
            ctx.fillText(appParts.join('  ') || 'Apparence non définie', 212, 175);

            // Bio
            if (oc.bio) {
                ctx.fillStyle = 'rgba(255,255,255,0.85)';
                ctx.font = 'italic 13px sans-serif';
                const bio = oc.bio.length > 130 ? oc.bio.substring(0, 130) + '...' : oc.bio;
                ctx.fillText('"' + bio + '"', 212, 200);
            }

            // ═══ STATS ═══
            const statsData = [
                { label: '✨ Invocations', value: waifusTotal.toString() },
                { label: '⚔️ Combats gagnés', value: combatsGagnes.toString() },
                { label: '💥 Raids', value: raidsEffectues.toString() },
                { label: '🗝️ Clés', value: cles.toString() },
                { label: '📊 Niv. moyen', value: niveauMoyen.toString() },
                { label: '📅 Arrivée', value: dateArrivee },
            ];

            const startY = 270;
            statsData.forEach((stat, i) => {
                const col = i % 3;
                const row = Math.floor(i / 3);
                const x = 30 + col * 258;
                const y = startY + row * 75;

                // Fond carte
                ctx.fillStyle = 'rgba(255,255,255,0.04)';
                roundRect(ctx, x, y, 238, 60, 10);
                ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.08)';
                ctx.lineWidth = 1;
                roundRect(ctx, x, y, 238, 60, 10);
                ctx.stroke();

                // Label
                ctx.fillStyle = 'rgba(255,255,255,0.45)';
                ctx.font = '12px sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(stat.label, x + 12, y + 22);

                // Valeur
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 22px sans-serif';
                ctx.fillText(stat.value, x + 12, y + 50);
            });

            // Waifu favorite
            if (waifuFavorite) {
                ctx.fillStyle = genre.couleur;
                ctx.font = 'bold 13px sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText('💞 Waifu favorite : ' + waifuFavorite.nom, 30, 490);
            }

            // Watermark
            ctx.fillStyle = 'rgba(255,255,255,0.12)';
            ctx.font = '11px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText('✨ Starlight', width - 20, height - 12);

            // Envoyer
            const buffer = canvas.toBuffer('image/png');
            const attachment = new AttachmentBuilder(buffer, { name: 'profil.png' });
            return interaction.editReply({ files: [attachment] });

        } catch (error) {
            console.error('Erreur profil:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};