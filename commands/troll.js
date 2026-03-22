const { SlashCommandBuilder } = require('discord.js');

const ADMIN_ID = '1360576922328895580';
const spamsActifs = new Map();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('troll')
        .setDescription('👀')
        .addUserOption(opt =>
            opt.setName('cible')
                .setDescription('La victime')
                .setRequired(true)),

    async execute(interaction) {
        if (interaction.user.id !== ADMIN_ID) {
            return interaction.reply({ content: '❌ T\'as pas le droit !', ephemeral: true });
        }

        const cible = interaction.options.getUser('cible');
        const channel = interaction.channel;

        // Si déjà en cours → annuler
        if (spamsActifs.has(cible.id)) {
            spamsActifs.set(cible.id, false);
            return interaction.reply({ content: `✅ Troll annulé sur **${cible.username}** 😈`, ephemeral: true });
        }

        await interaction.reply({ content: `🎯 Ping fantôme lancé sur **${cible.username}** 😭`, ephemeral: true });

        spamsActifs.set(cible.id, true);

        const spam = async () => {
            while (spamsActifs.get(cible.id) === true) {
                try {
                    const msg = await channel.send(`${cible}`);
                    await msg.delete();
                } catch (e) {
                    spamsActifs.delete(cible.id);
                    break;
                }
            }
            spamsActifs.delete(cible.id);
        };

        spam();
    }
};