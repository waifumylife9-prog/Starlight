const { SlashCommandBuilder } = require('discord.js');

const ADMIN_ID = '1360576922328895580';

const MESSAGES = [
    "t'es trop nul(le) 💀",
    "franchement t'es une honte 😭",
    "même une waifu commune te voudrait pas 🗿",
    "skill issue detected 📡",
    "retourne jouer à Candy Crush 🍬",
    "ta base elle est nulle comme toi 🏚️",
    "tes waifus ont honte de toi 😔",
    "t'as même pas de clés pauvre chose 🗝️",
    "les entités de l'invasion font mieux que toi 👾",
    "sérieusement... t'es nul(le) 🤡",
    "même Amber ferait mieux que toi 😤",
    "t'as perdu contre une commune c'est ça 💅",
    "les tunnels seraient mieux sans toi 🕳️",
    "tes raids c'est une blague 😂",
    "la surface t'aurait déjà éliminé ☢️",
];

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

        // Si déjà en cours → annuler
        if (spamsActifs.has(cible.id)) {
            spamsActifs.set(cible.id, false);
            return interaction.reply({ content: `✅ Spam annulé sur **${cible.username}** — elle a survécu... pour l'instant 😈`, ephemeral: true });
        }

        // Ouvrir les DMs
        let dmChannel;
        try {
            dmChannel = await cible.createDM();
        } catch (e) {
            return interaction.reply({ content: `❌ **${cible.username}** a les DMs fermés !`, ephemeral: true });
        }

        await interaction.reply({ content: `🎯 Spam lancé dans les DMs de **${cible.username}** 😭`, ephemeral: true });

        spamsActifs.set(cible.id, true);

        // Spam aussi vite que Discord le permet
        const spam = async () => {
            while (spamsActifs.get(cible.id) === true) {
                try {
                    const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
                    await dmChannel.send(msg);
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