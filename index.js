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

// Charger les commandes
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    }
}

// Quand le bot est prêt
client.once('ready', async () => {
    console.log(`✅ ${client.user.tag} est en ligne !`);
    await connectDB();
});

// Gérer les interactions (slash commands)
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: '❌ Une erreur est survenue !', ephemeral: true });
    }
});

client.login(process.env.DISCORD_TOKEN);