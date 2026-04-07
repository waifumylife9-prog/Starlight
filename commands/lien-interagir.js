const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, ChannelType } = require('discord.js');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');
const WaifuImage = require('../models/WaifuImage');
const { RARETES } = require('../config');
 
const ADMIN_ID = '1360576922328895580';
 
module.exports = {
    data: new SlashCommandBuilder()
        .setName('lien')
        .setDescription('Gérer le lien avec tes waifus')
        .addSubcommand(sub =>
            sub.setName('interagir')
                .setDescription('Parler avec une de tes waifus')
                .addStringOption(option =>
                    option.setName('waifu')
                        .setDescription('Le nom de la waifu avec qui interagir')
                        .setRequired(true))),
 
    async execute(interaction) {
        if (interaction.options.getSubcommand() !== 'interagir') return;
 
        await interaction.deferReply({ flags: 64 });
 
        try {
            const userId = interaction.user.id;
            const username = interaction.user.username;
            const nomRecherche = interaction.options.getString('waifu').toLowerCase();
 
            // Vérifier que le joueur existe
            const player = await Player.findOne({ userId });
            if (!player) {
                return interaction.editReply('❌ Tu n\'as pas encore de compte. Utilise `/invoquer` pour commencer !');
            }
 
            // Chercher la waifu dans la collection du joueur
            const waifus = await Waifu.find({
                proprietaire: userId,
                estVivante: true,
            });
 
            const waifu = waifus.find(w => w.nom.toLowerCase().includes(nomRecherche));
 
            if (!waifu) {
                return interaction.editReply(`❌ Tu ne possèdes aucune waifu nommée **${interaction.options.getString('waifu')}**. Vérifie ta collection avec \`/collection\`.`);
            }
 
            const guild = interaction.guild;
            if (!guild) {
                return interaction.editReply('❌ Cette commande doit être utilisée dans un serveur.');
            }
 
            // Vérifier les permissions du bot
            const botMember = guild.members.me;
            if (!botMember.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
                return interaction.editReply('❌ Je n\'ai pas la permission de créer des salons. Contacte un administrateur.');
            }
 
            // Nom du salon RP pour ce joueur
            const channelName = `rp-${username.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
 
            // Chercher si le salon existe déjà
            let rpChannel = guild.channels.cache.find(
                c => c.name === channelName && c.type === ChannelType.GuildText
            );
 
            // Récupérer l'admin (Ren)
            let adminMember = null;
            try {
                adminMember = await guild.members.fetch(ADMIN_ID);
            } catch {
                // L'admin n'est peut-être pas dans le serveur, on continue quand même
            }
 
            // Créer le salon s'il n'existe pas
            if (!rpChannel) {
                const permissionOverwrites = [
                    {
                        // @everyone ne peut pas voir
                        id: guild.roles.everyone.id,
                        deny: [PermissionsBitField.Flags.ViewChannel],
                    },
                    {
                        // Le joueur peut voir et écrire
                        id: userId,
                        allow: [
                            PermissionsBitField.Flags.ViewChannel,
                            PermissionsBitField.Flags.SendMessages,
                            PermissionsBitField.Flags.ReadMessageHistory,
                        ],
                    },
                    {
                        // Le bot peut voir et écrire
                        id: botMember.id,
                        allow: [
                            PermissionsBitField.Flags.ViewChannel,
                            PermissionsBitField.Flags.SendMessages,
                            PermissionsBitField.Flags.ReadMessageHistory,
                            PermissionsBitField.Flags.ManageChannels,
                        ],
                    },
                ];
 
                // Ren peut aussi voir et écrire
                if (adminMember) {
                    permissionOverwrites.push({
                        id: ADMIN_ID,
                        allow: [
                            PermissionsBitField.Flags.ViewChannel,
                            PermissionsBitField.Flags.SendMessages,
                            PermissionsBitField.Flags.ReadMessageHistory,
                        ],
                    });
                }
 
                rpChannel = await guild.channels.create({
                    name: channelName,
                    type: ChannelType.GuildText,
                    topic: `Salon RP privé de ${username} — Starlight 🌟`,
                    permissionOverwrites,
                });
            }
 
            // Augmenter le lien de la waifu +1
            waifu.lien = (waifu.lien || 0) + 1;
            waifu.dernierInteraction = new Date();
            await waifu.save();
 
            // Récupérer l'image de la waifu
            const imageDoc = await WaifuImage.findOne({ nom: waifu.nom });
            const rareteInfo = RARETES[waifu.rarete] || RARETES['COMMUNE'];
 
            // Construire l'embed d'annonce
            const embed = new EmbedBuilder()
                .setTitle(`💌 Interaction avec ${waifu.nom}`)
                .setDescription(
                    `*Les tunnels de Starlight bruissent doucement...*\n\n` +
                    `<@${userId}> souhaite interagir avec **${waifu.nom}**.\n\n` +
                    `<@${ADMIN_ID}> va bientôt donner vie à cette rencontre. ` +
                    `L'interaction commencera très bientôt — soyez patient(e) ! 🌙`
                )
                .addFields(
                    { name: `${rareteInfo.emoji} Rareté`, value: rareteInfo.nom, inline: true },
                    { name: '🌍 Univers', value: waifu.univers || 'Inconnu', inline: true },
                    { name: '💞 Lien', value: `${waifu.lien}`, inline: true },
                )
                .setColor(rareteInfo.couleur)
                .setFooter({ text: `Starlight ✨ — Salon privé de ${username}` });
 
            if (imageDoc) embed.setThumbnail(imageDoc.url);
 
            // Envoyer le message dans le salon RP
            await rpChannel.send({
                content: adminMember ? `<@${ADMIN_ID}>` : undefined,
                embeds: [embed],
            });
 
            // Confirmer au joueur (éphémère)
            return interaction.editReply(
                `✅ Ton interaction avec **${waifu.nom}** a été envoyée dans <#${rpChannel.id}> !\n` +
                `💞 Lien actuel : **${waifu.lien}**`
            );
 
        } catch (error) {
            console.error(error);
            return interaction.editReply('❌ Une erreur est survenue lors de l\'interaction.');
        }
    }
};
 