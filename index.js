require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
const connectDB = require('./database/db');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    }
}

client.once('clientReady', () => {
    console.log(`✅ ${client.user.tag} est en ligne !`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        try {
            if (interaction.deferred) {
                await interaction.editReply({ content: '❌ Une erreur est survenue !' });
            } else {
                await interaction.reply({ content: '❌ Une erreur est survenue !', flags: 64 });
            }
        } catch (e) {
            console.error('Impossible de répondre à l\'interaction:', e);
        }
    }
});

process.on('unhandledRejection', error => {
    console.error('Erreur non gérée:', error);
});

client.on('error', error => {
    console.error('Erreur client Discord:', error);
});

// Connecter MongoDB d'abord, puis lancer le bot
connectDB().then(() => {
    client.login(process.env.DISCORD_TOKEN);
}).catch(err => {
    console.error('Impossible de connecter MongoDB:', err);
    process.exit(1);
});