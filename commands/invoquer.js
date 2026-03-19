const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const Base = require('../models/Base');
const { tirerRarete } = require('../utils/gacha');
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

        try {
            const userId = interaction.user.id;
            const username = interaction.user.username;
            const quantite = interaction.options.getInteger('quantite') || 1;

            let player = await Player.findOne({ userId });
            if (!player) {
                player = await Player.create({ userId, username });
            }

            if (player.cles < quantite) {
                return interaction.editReply(`❌ Tu n'as pas assez de clés ! Tu en as **${player.cles}** et il t'en faut **${quantite}**.`);
            }

            let base = await Base.findOne({ proprietaire: userId });
            if (!base) {
                base = await Base.create({ proprietaire: userId });
            }

            const waifusActuelles = await Waifu.countDocuments({ proprietaire: userId, estVivante: true });
            if (waifusActuelles + quantite > base.capaciteWaifus) {
                return interaction.editReply(`❌ Ta base est pleine ! Capacité : **${waifusActuelles}/${base.capaciteWaifus}**. Construis des dortoirs !`);
            }

            const waifusObtenues = [];

            for (let i = 0; i < quantite; i++) {
                const rarete = tirerRarete();

                let pool = WAIFUS.filter(w => w.rarete === rarete);
                if (pool.length === 0) pool = WAIFUS.filter(w => w.rarete === 'COMMUNE');
                if (pool.length === 0) pool = WAIFUS;

                const waifuData = pool[Math.floor(Math.random() * pool.length)];

                let competences = waifuData.competences || [];
                if (typeof competences === 'string') {
                    try { competences = JSON.parse(competences); } catch { competences = []; }
                }

                const waifu = await Waifu.create({
                    nom: waifuData.nom,
                    description: waifuData.description || '',
                    apparence: waifuData.apparence || '',
                    rarete: waifuData.rarete,
                    type: waifuData.type || 'Neutre',
                    stats: waifuData.stats,
                    competences: competences,
                    proprietaire: userId,
                });

                player.waifus.push(waifu._id);
                waifusObtenues.push({ ...waifuData });
            }

            player.cles -= quantite;
            player.statistiques.waifusInvoquees += quantite;
            await player.save();

            if (quantite === 1) {
                const w = waifusObtenues[0];
                const rareteInfo = RARETES[w.rarete] || RARETES['COMMUNE'];

                // Récupérer l'image si elle existe
                const imageDoc = await WaifuImage.findOne({ nom: w.nom });

                const embed = new EmbedBuilder()
                    .setTitle(`✨ Invocation !`)
                    .setDescription(`*${w.description ? w.description.substring(0, 300) + '...' : 'Une entité mystérieuse émerge de la machine...'}*`)
                    .addFields(
                        { name: '🌸 Waifu', value: `**${w.nom}**`, inline: true },
                        { name: `${rareteInfo.emoji} Rareté`, value: rareteInfo.nom, inline: true },
                        { name: '🌍 Univers', value: w.univers || 'Inconnu', inline: true },
                        { name: '❤️ HP', value: `${w.stats.hp}`, inline: true },
                        { name: '🛡️ DEF', value: `${w.stats.def}`, inline: true },
                        { name: '⚡ SPD', value: `${w.stats.spd}`, inline: true },
                        { name: '💥 CRIT', value: `${w.stats.crit}`, inline: true },
                        { name: '✨ MGK', value: `${w.stats.mgk}`, inline: true },
                        { name: '🔮 RES', value: `${w.stats.res}`, inline: true },
                    )
                    .setColor(rareteInfo.couleur)
                    .setFooter({ text: `🗝️ Clés restantes : ${player.cles}` });

                if (imageDoc) embed.setImage(imageDoc.url);

                return interaction.editReply({ embeds: [embed] });

            } else {
                let description = '';
                for (const w of waifusObtenues) {
                    const rareteInfo = RARETES[w.rarete] || RARETES['COMMUNE'];
                    description += `${rareteInfo.emoji} **${w.nom}** (${w.univers || 'Inconnu'}) — ${rareteInfo.nom}\n`;
                }

                const embed = new EmbedBuilder()
                    .setTitle(`✨ Invocation x10 !`)
                    .setDescription(description)
                    .setColor(0xFFD700)
                    .setFooter({ text: `🗝️ Clés restantes : ${player.cles}` });

                return interaction.editReply({ embeds: [embed] });
            }

        } catch (error) {
            console.error(error);
            await interaction.editReply('❌ Une erreur est survenue !');
        }
    }
};