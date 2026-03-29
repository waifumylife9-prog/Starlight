const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const { RARETES } = require('../config');

const DUREE_STADE = 24 * 60 * 60 * 1000; // 24h par stade

const STADES = {
    bebe: { emoji: '👶', label: 'Bébé', prochain: 'enfant', multiplicateur: 0.3 },
    enfant: { emoji: '🧒', label: 'Enfant', prochain: 'adulte', multiplicateur: 0.6 },
    adulte: { emoji: '👩', label: 'Adulte', prochain: null, multiplicateur: 1.0 },
};

function formatDuree(ms) {
    if (ms <= 0) return 'Bientôt !';
    const heures = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${heures}h ${minutes}min`;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('enfants')
        .setDescription('Voir les grossesses en cours et les enfants en croissance'),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const userId = interaction.user.id;
            const maintenant = Date.now();

            // ═══ GROSSESSES EN COURS ═══
            const grossesses = await Waifu.find({
                proprietaire: userId,
                enGrossesse: true,
                estVivante: true,
            }).populate('partenaireGrossesse');

            // ═══ ENFANTS EN CROISSANCE ═══
            const enfants = await Waifu.find({
                proprietaire: userId,
                estEnfant: true,
                estVivante: true,
                stadesCroissance: { $ne: 'adulte' },
            });

            if (grossesses.length === 0 && enfants.length === 0) {
                return interaction.editReply('❌ Aucune grossesse en cours ni enfant en croissance !');
            }

            const embed = new EmbedBuilder()
                .setTitle('👶 Grossesses & Enfants')
                .setColor(0xFF69B4)
                .setFooter({ text: '✨ Starlight' });

            // ═══ SECTION GROSSESSES ═══
            if (grossesses.length > 0) {
                // Éviter les doublons (on a les deux mamans en BDD)
                const vues = new Set();
                let texteGrossesses = '';

                for (const maman of grossesses) {
                    const partenaire = maman.partenaireGrossesse;
                    if (!partenaire) continue;

                    const cle = [maman._id.toString(), partenaire._id?.toString()].sort().join('-');
                    if (vues.has(cle)) continue;
                    vues.add(cle);

                    const tempsRestant = new Date(maman.finGrossesse).getTime() - maintenant;
                    texteGrossesses += `💕 **${maman.nom}** + **${partenaire.nom || '???'}**\n`;
                    texteGrossesses += `⏰ Naissance dans : **${formatDuree(tempsRestant)}**\n`;
                    texteGrossesses += `🎯 Naissance prévue : <t:${Math.floor(new Date(maman.finGrossesse).getTime() / 1000)}:R>\n\n`;
                }

                if (texteGrossesses) {
                    embed.addFields({
                        name: '🤰 Grossesses en cours',
                        value: texteGrossesses,
                        inline: false,
                    });
                }
            }

            // ═══ SECTION ENFANTS ═══
            if (enfants.length > 0) {
                let texteEnfants = '';

                for (const enfant of enfants) {
                    const stade = STADES[enfant.stadesCroissance] || STADES['bebe'];
                    const rareteInfo = RARETES[enfant.rarete] || RARETES['COMMUNE'];

                    // Calculer le temps restant avant prochain stade
                    // On utilise dateNaissance + durée par stade
                    const dateNaissance = new Date(enfant.dateNaissance).getTime();
                    let finStade;
                    if (enfant.stadesCroissance === 'bebe') {
                        finStade = dateNaissance + DUREE_STADE;
                    } else if (enfant.stadesCroissance === 'enfant') {
                        finStade = dateNaissance + DUREE_STADE * 2;
                    }

                    const tempsRestant = finStade ? finStade - maintenant : 0;

                    texteEnfants += `${stade.emoji} **${enfant.nom}** ${rareteInfo.emoji}\n`;
                    texteEnfants += `📊 Stade : **${stade.label}**\n`;

                    if (stade.prochain && finStade) {
                        texteEnfants += `⏰ Prochain stade dans : **${formatDuree(tempsRestant)}**\n`;
                        texteEnfants += `🔓 Devient ${STADES[stade.prochain].label} : <t:${Math.floor(finStade / 1000)}:R>\n`;
                    }

                    // Parents
                    if (enfant.parents && enfant.parents.length > 0) {
                        const parents = await Waifu.find({ _id: { $in: enfant.parents } });
                        const nomsParents = parents.map(p => p.nom).join(' + ');
                        texteEnfants += `👩 Parents : ${nomsParents}\n`;
                    }

                    texteEnfants += '\n';
                }

                embed.addFields({
                    name: '🌱 Enfants en croissance',
                    value: texteEnfants,
                    inline: false,
                });
            }

            return interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Erreur enfants:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const { RARETES } = require('../config');

const duree_stade = 24 * 60 * 60 * 1000; // 24h par stade

const stades = {
    bebe: { emoji: '👶', label: 'Bébé', prochain: 'enfant', multiplicateur: 0.3 },
    enfant: { emoji: '🧒', label: 'Enfant', prochain: 'adulte', multiplicateur: 0.6 },
    adulte: { emoji: '👩', label: 'Adulte', prochain: null, multiplicateur: 1.0 },
};

function formatDuree(ms) {
    if (ms <= 0) return 'Bientôt !';
    const heures = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    return `${heures}h ${minutes}min`;
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('enfants')
        .setDescription('Voir les grossesses en cours et les enfants en croissance'),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const userId = interaction.user.id;
            const maintenant = Date.now();

            // ═══ GROSSESSES EN COURS ═══
            const grossesses = await Waifu.find({
                proprietaire: userId,
                enGrossesse: true,
                estVivante: true,
            }).populate('partenaireGrossesse');

            // ═══ ENFANTS EN CROISSANCE ═══
            const enfants = await Waifu.find({
                proprietaire: userId,
                estEnfant: true,
                estVivante: true,
                stadesCroissance: { $ne: 'adulte' },
            });

            if (grossesses.length === 0 && enfants.length === 0) {
                return interaction.editReply('❌ Aucune grossesse en cours ni enfant en croissance !');
            }

            const embed = new EmbedBuilder()
                .setTitle('👶 Grossesses & Enfants')
                .setColor(0xFF69B4)
                .setFooter({ text: '✨ Starlight' });

            // ═══ SECTION GROSSESSES ═══
            if (grossesses.length > 0) {
                // Éviter les doublons (on a les deux mamans en BDD)
                const vues = new Set();
                let texteGrossesses = '';

                for (const maman of grossesses) {
                    const partenaire = maman.partenaireGrossesse;
                    if (!partenaire) continue;

                    const cle = [maman._id.toString(), partenaire._id?.toString()].sort().join('-');
                    if (vues.has(cle)) continue;
                    vues.add(cle);

                    const tempsRestant = new Date(maman.finGrossesse).getTime() - maintenant;
                    texteGrossesses += `💕 **${maman.nom}** + **${partenaire.nom || '???'}**\n`;
                    texteGrossesses += `⏰ Naissance dans : **${formatDuree(tempsRestant)}**\n`;
                    texteGrossesses += `🎯 Naissance prévue : <t:${Math.floor(new Date(maman.finGrossesse).getTime() / 1000)}:R>\n\n`;
                }

                if (texteGrossesses) {
                    embed.addFields({
                        name: '🤰 Grossesses en cours',
                        value: texteGrossesses,
                        inline: false,
                    });
                }
            }

            // ═══ SECTION ENFANTS ═══
            if (enfants.length > 0) {
                let texteEnfants = '';

                for (const enfant of enfants) {
                    const stade = STADES[enfant.stadesCroissance] || STADES['bebe'];
                    const rareteInfo = RARETES[enfant.rarete] || RARETES['COMMUNE'];

                    // Calculer le temps restant avant prochain stade
                    // On utilise dateNaissance + durée par stade
                    const dateNaissance = new Date(enfant.dateNaissance).getTime();
                    let finStade;
                    if (enfant.stadesCroissance === 'bebe') {
                        finStade = dateNaissance + DUREE_STADE;
                    } else if (enfant.stadesCroissance === 'enfant') {
                        finStade = dateNaissance + DUREE_STADE * 2;
                    }

                    const tempsRestant = finStade ? finStade - maintenant : 0;

                    texteEnfants += `${stade.emoji} **${enfant.nom}** ${rareteInfo.emoji}\n`;
                    texteEnfants += `📊 Stade : **${stade.label}**\n`;

                    if (stade.prochain && finStade) {
                        texteEnfants += `⏰ Prochain stade dans : **${formatDuree(tempsRestant)}**\n`;
                        texteEnfants += `🔓 Devient ${STADES[stade.prochain].label} : <t:${Math.floor(finStade / 1000)}:R>\n`;
                    }

                    // Parents
                    if (enfant.parents && enfant.parents.length > 0) {
                        const parents = await Waifu.find({ _id: { $in: enfant.parents } });
                        const nomsParents = parents.map(p => p.nom).join(' + ');
                        texteEnfants += `👩 Parents : ${nomsParents}\n`;
                    }

                    texteEnfants += '\n';
                }

                embed.addFields({
                    name: '🌱 Enfants en croissance',
                    value: texteEnfants,
                    inline: false,
                });
            }

            return interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Erreur enfants:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};