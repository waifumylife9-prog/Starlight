const { SlashCommandBuilder } = require('discord.js');
const Player = require('../models/Player');

const ADMIN_ID = '1360576922328895580';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addcles')
        .setDescription('Ajouter des clés à un joueur (admin only)')
        .addUserOption(option =>
            option.setName('joueur')
                .setDescription('Le joueur')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('quantite')
                .setDescription('Nombre de clés')
                .setRequired(true)),

    async execute(interaction) {
        if (interaction.user.id !== ADMIN_ID) {
            return interaction.reply({ content: '❌ T\'as pas le droit !', ephemeral: true });
        }

        const target = interaction.options.getUser('joueur');
        const quantite = interaction.options.getInteger('quantite');

        let player = await Player.findOne({ userId: target.id });
        if (!player) {
            player = await Player.create({ userId: target.id, username: target.username });
        }

        player.cles += quantite;
        await player.save();

        return interaction.reply(`✅ **${quantite} clés** ajoutées à **${target.username}** ! Total : **${player.cles} clés** 🗝️`);
    }
};