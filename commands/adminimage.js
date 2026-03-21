const { SlashCommandBuilder } = require('discord.js');
const WaifuImage = require('../models/WaifuImage');

const ADMIN_ID = '1360576922328895580';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adminimage')
        .setDescription('[ADMIN] Associe une image à une waifu')
        .addStringOption(option =>
            option.setName('nom')
                .setDescription('Nom exact de la waifu')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('url')
                .setDescription('URL de l\'image ou du gif')
                .setRequired(true)),

    async execute(interaction) {
        if (interaction.user.id !== ADMIN_ID) {
            return interaction.reply({ content: '❌ Permission refusée.', ephemeral: true });
        }

        await interaction.deferReply({ ephemeral: true });

        const nom = interaction.options.getString('nom');
        const url = interaction.options.getString('url');

        try {
            await WaifuImage.findOneAndUpdate(
                { nom },
                { nom, url },
                { upsert: true, new: true }
            );

            return interaction.editReply(`✅ Image associée à **${nom}** avec succès !`);
        } catch (error) {
            console.error(error);
            return interaction.editReply('❌ Une erreur est survenue.');
        }
    }
};