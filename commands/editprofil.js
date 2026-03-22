const { SlashCommandBuilder } = require('discord.js');
const Player = require('../models/Player');
const Waifu = require('../models/Waifu');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('editprofil')
        .setDescription('Créer ou modifier ton profil OC')
        .addSubcommand(sub =>
            sub.setName('nom')
                .setDescription('Changer le nom de ton OC')
                .addStringOption(opt =>
                    opt.setName('nom')
                        .setDescription('Le nom de ton OC')
                        .setRequired(true)))
        .addSubcommand(sub =>
            sub.setName('genre')
                .setDescription('Choisir le genre de ton OC')
                .addStringOption(opt =>
                    opt.setName('genre')
                        .setDescription('Le genre de ton OC')
                        .setRequired(true)
                        .addChoices(
                            { name: '🌸 Femboy Soumise', value: 'femboy_soumise' },
                            { name: '👑 Femme Dominante', value: 'femme_dominante' },
                            { name: '🌷 Femme Soumise', value: 'femme_soumise' },
                        )))
        .addSubcommand(sub =>
            sub.setName('bio')
                .setDescription('Écrire la biographie de ton OC')
                .addStringOption(opt =>
                    opt.setName('texte')
                        .setDescription('La bio de ton OC (max 300 caractères)')
                        .setRequired(true)))
        .addSubcommand(sub =>
            sub.setName('apparence')
                .setDescription('Décrire l\'apparence de ton OC')
                .addStringOption(opt =>
                    opt.setName('cheveux')
                        .setDescription('Couleur et style des cheveux')
                        .setRequired(false))
                .addStringOption(opt =>
                    opt.setName('yeux')
                        .setDescription('Couleur des yeux')
                        .setRequired(false))
                .addStringOption(opt =>
                    opt.setName('taille')
                        .setDescription('Taille (ex: 1m65)')
                        .setRequired(false))
                .addStringOption(opt =>
                    opt.setName('morphologie')
                        .setDescription('Morphologie')
                        .setRequired(false))
                .addStringOption(opt =>
                    opt.setName('tenue')
                        .setDescription('Style vestimentaire')
                        .setRequired(false)))
        .addSubcommand(sub =>
            sub.setName('faction')
                .setDescription('Créer ou rejoindre une faction (coûte 10 clés)')
                .addStringOption(opt =>
                    opt.setName('nom')
                        .setDescription('Le nom de ta faction')
                        .setRequired(true)))
        .addSubcommand(sub =>
            sub.setName('waifufav')
                .setDescription('Définir ta waifu favorite')
                .addStringOption(opt =>
                    opt.setName('nom')
                        .setDescription('Le nom de ta waifu favorite')
                        .setRequired(true))),

    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        try {
            const userId = interaction.user.id;
            const username = interaction.user.username;
            const sub = interaction.options.getSubcommand();

            let player = await Player.findOne({ userId });
            if (!player) {
                player = await Player.create({ userId, username });
            }

            if (!player.oc) player.oc = {};

            switch (sub) {
                case 'nom': {
                    const nom = interaction.options.getString('nom');
                    if (nom.length > 32) return interaction.editReply('❌ Le nom ne peut pas dépasser 32 caractères !');
                    player.oc.nom = nom;
                    await player.save();
                    return interaction.editReply(`✅ Nom de ton OC mis à jour : **${nom}**`);
                }

                case 'genre': {
                    const genre = interaction.options.getString('genre');
                    player.oc.genre = genre;
                    await player.save();
                    const labels = {
                        'femboy_soumise': '🌸 Femboy Soumise',
                        'femme_dominante': '👑 Femme Dominante',
                        'femme_soumise': '🌷 Femme Soumise',
                    };
                    return interaction.editReply(`✅ Genre mis à jour : **${labels[genre]}**`);
                }

                case 'bio': {
                    const bio = interaction.options.getString('texte');
                    if (bio.length > 300) return interaction.editReply('❌ La bio ne peut pas dépasser 300 caractères !');
                    player.oc.bio = bio;
                    await player.save();
                    return interaction.editReply(`✅ Bio mise à jour !`);
                }

                case 'apparence': {
                    const cheveux = interaction.options.getString('cheveux');
                    const yeux = interaction.options.getString('yeux');
                    const taille = interaction.options.getString('taille');
                    const morphologie = interaction.options.getString('morphologie');
                    const tenue = interaction.options.getString('tenue');

                    if (!player.oc.apparence) player.oc.apparence = {};
                    if (cheveux) player.oc.apparence.cheveux = cheveux;
                    if (yeux) player.oc.apparence.yeux = yeux;
                    if (taille) player.oc.apparence.taille = taille;
                    if (morphologie) player.oc.apparence.morphologie = morphologie;
                    if (tenue) player.oc.apparence.tenue = tenue;

                    await player.save();
                    return interaction.editReply('✅ Apparence mise à jour !');
                }

                case 'faction': {
                    const nomFaction = interaction.options.getString('nom');

                    if (player.cles < 10) {
                        return interaction.editReply(`❌ Créer une faction coûte **10 clés** ! Tu en as **${player.cles}**.`);
                    }

                    player.cles -= 10;
                    player.oc.faction = nomFaction;
                    await player.save();
                    return interaction.editReply(`✅ Faction **${nomFaction}** créée ! (-10 clés)`);
                }

                case 'waifufav': {
                    const nomWaifu = interaction.options.getString('nom');
                    const waifu = await Waifu.findOne({
                        proprietaire: userId,
                        nom: { $regex: nomWaifu, $options: 'i' },
                        estVivante: true
                    });

                    if (!waifu) return interaction.editReply(`❌ Tu n'as pas de waifu nommée **${nomWaifu}** !`);

                    player.oc.waifuFavoriteId = waifu._id;
                    await player.save();
                    return interaction.editReply(`✅ Waifu favorite mise à jour : **${waifu.nom}** 💞`);
                }
            }

        } catch (error) {
            console.error('Erreur editprofil:', error);
            return interaction.editReply('❌ Une erreur est survenue !');
        }
    }
};