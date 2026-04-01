const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Waifu = require('../models/Waifu');
const Base = require('../models/Base');
const WaifuImage = require('../models/WaifuImage');
const { RARETES } = require('../config');
const { tirerRarete } = require('../utils/gacha');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('accoupler')
        .setDescription('Faire se reproduire deux waifus pour créer un enfant')
        .addStringOption(opt =>
            opt.setName('maman1')
                .setDescription('Le nom de la première maman')
                .setRequired(true))
        .addStringOption(opt =>
            opt.setName('maman2')
                .setDescription('Le nom de la deuxième maman')
                .setRequired(true)),

    async execute(interaction) {
        await interaction.deferReply();

        try {
            const userId = interaction.user.id;
            const nomMaman1 = interaction.options.getString('maman1');
            const nomMaman2 = interaction.options.getString('maman2');

            if (nomMaman1.toLowerCase() === nomMaman2.toLowerCase()) {
                return interaction.editReply(`❌ Tu ne peux pas accoupler une waifu avec elle-même ! 😅`);
            }

            const maman1 = await Waifu.findOne({
                proprietaire: userId,
                nom: { $regex: nomMaman1, $options: 'i' },
                estVivante: true,
            });

            if (!maman1) return interaction.editReply(`❌ Tu n'as pas de waifu nommée **${nomMaman1}** !`);
            if (maman1.enGrossesse) return interaction.editReply(`❌ **${maman1.nom}** est déjà enceinte ! Elle est occupée... 🍼`);
            if (!maman1.estDisponible) return interaction.editReply(`❌ **${maman1.nom}** n'est pas disponible — elle s'amuse ailleurs 😏`);

            const maman2 = await Waifu.findOne({
                proprietaire: userId,
                nom: { $regex: nomMaman2, $options: 'i' },
                estVivante: true,
                _id: { $ne: maman1._id },
            });

            if (!maman2) return interaction.editReply(`❌ Tu n'as pas de waifu nommée **${nomMaman2}** ! (ou c'est la même que la première 😅)`);
            if (maman2.enGrossesse) return interaction.editReply(`❌ **${maman2.nom}** est déjà enceinte ! Elle est occupée... 🍼`);
            if (!maman2.estDisponible) return interaction.editReply(`❌ **${maman2.nom}** n'est pas disponible — elle s'amuse ailleurs 😏`);

            if (maman1.nom === maman2.nom) {
                return interaction.editReply(`❌ Tu ne peux pas accoupler deux **${maman1.nom}** ensemble !`);
            }

            const base = await Base.findOne({ proprietaire: userId });
            if (!base) return interaction.editReply('❌ Tu n\'as pas de base !');

            const waifusActuelles = await Waifu.countDocuments({ proprietaire: userId, estVivante: true });
            if (waifusActuelles >= base.capaciteWaifus) {
                return interaction.editReply(`❌ Ta base est pleine ! Capacité : **${waifusActuelles}/${base.capaciteWaifus}**.`);
            }

            // Taux de ressemblance aléatoire
            const pourcMaman1 = Math.floor(Math.random() * 99) + 1;
            const pourcMaman2 = 100 - pourcMaman1;

            // Rareté basée sur les taux d'invocation normaux
            const rareteEnfant = tirerRarete();
            const rareteInfo = RARETES[rareteEnfant] || RARETES['COMMUNE'];
            const rarete1 = RARETES[maman1.rarete] || RARETES['COMMUNE'];
            const rarete2 = RARETES[maman2.rarete] || RARETES['COMMUNE'];

            const finGrossesse = new Date(Date.now() + 24 * 60 * 60 * 1000);

            maman1.enGrossesse = true;
            maman1.partenaireGrossesse = maman2._id;
            maman1.finGrossesse = finGrossesse;
            maman1.estDisponible = false;
            await maman1.save();

            maman2.enGrossesse = true;
            maman2.partenaireGrossesse = maman1._id;
            maman2.finGrossesse = finGrossesse;
            maman2.estDisponible = false;
            await maman2.save();

            // Noms possibles
            const prenom1 = maman1.nom.split(' ')[0].toLowerCase();
            const prenom2 = maman2.nom.split(' ')[0].toLowerCase();
            const mid1 = Math.ceil(prenom1.length / 2);
            const mid2 = Math.ceil(prenom2.length / 2);
            const combinaisons = [
                prenom1.substring(0, mid1) + prenom2.substring(mid2),
                prenom2.substring(0, mid2) + prenom1.substring(mid1),
                prenom1.substring(0, mid1) + prenom2.substring(0, mid2),
                prenom1.substring(mid1) + prenom2.substring(mid2),
            ].filter(n => n.length >= 2 && n.length <= 8)
             .map(n => n.charAt(0).toUpperCase() + n.slice(1));

            const img1 = await WaifuImage.findOne({ nom: maman1.nom });

            const embed = new EmbedBuilder()
                .setTitle('💞 Accouplement lancé !')
                .setColor(0xFF69B4)
                .setDescription(`**${maman1.nom}** et **${maman2.nom}** s'amusent ensemble... 😏\n\nLa naissance aura lieu dans **24 heures** ! 🍼`)
                .addFields(
                    { name: `${rarete1.emoji} Maman 1 — ${pourcMaman1}%`, value: `**${maman1.nom}**\n${rarete1.nom}`, inline: true },
                    { name: '💕', value: '×', inline: true },
                    { name: `${rarete2.emoji} Maman 2 — ${pourcMaman2}%`, value: `**${maman2.nom}**\n${rarete2.nom}`, inline: true },
                    { name: '👶 Rareté estimée', value: `${rareteInfo.emoji} **${rareteInfo.nom}**`, inline: true },
                    { name: '⏰ Naissance', value: `<t:${Math.floor(finGrossesse.getTime() / 1000)}:R>`, inline: true },
                    { name: '💭 Noms possibles', value: combinaisons.join(' • ') || 'Mystère...', inline: false },
                )
                .setFooter({ text: '⚠️ Les deux mamans sont indisponibles pendant la grossesse !' });

            if (img1?.url) embed.setThumbnail(img1.url);

            return interaction.editReply({ embeds: [embed] });

        } catch (error) {
            console.error('Erreur accoupler:', error);
            return interaction.editReply('❌ Une erreur est survenue : ' + error.message);
        }
    }
};