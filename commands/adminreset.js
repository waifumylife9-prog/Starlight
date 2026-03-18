const { SlashCommandBuilder } = require('discord.js');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');
const Base = require('../models/Base');

const ADMIN_ID = '1360576922328895580';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adminreset')
        .setDescription('[ADMIN] Réinitialise le compte d\'un joueur')
        .addUserOption(option =>
            option.setName('joueur')
                .setDescription('Le joueur à reset')
                .setRequired(true)),

    async execute(interaction) {
        if (interaction.user.id !== ADMIN_ID) {
            return interaction.reply({ content: '❌ Tu n\'as pas la permission d\'utiliser cette commande.', ephemeral: true });
        }

        await interaction.deferReply({ ephemeral: true });

        const cible = interaction.options.getUser('joueur');

        try {
            await Waifu.deleteMany({ proprietaire: cible.id });
            await Base.deleteOne({ proprietaire: cible.id });
            await Player.deleteOne({ userId: cible.id });

            return interaction.editReply(`✅ Le compte de **${cible.username}** a été réinitialisé avec succès.`);
        } catch (error) {
            console.error(error);
            return interaction.editReply('❌ Une erreur est survenue lors du reset.');
        }
    }
};