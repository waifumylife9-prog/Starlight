const Waifu = require('../models/Waifu');
const Player = require('../models/Player');
const { genererStatsEnfant, tirerRareteEnfant } = require('./gacha');

const genererNomEnfant = (nom1, nom2) => {
    const prenom1 = nom1.split(' ')[0].toLowerCase();
    const prenom2 = nom2.split(' ')[0].toLowerCase();

    const mid1 = Math.ceil(prenom1.length / 2);
    const mid2 = Math.ceil(prenom2.length / 2);

    const debut1 = prenom1.substring(0, mid1);
    const fin1 = prenom1.substring(mid1);
    const debut2 = prenom2.substring(0, mid2);
    const fin2 = prenom2.substring(mid2);

    const combinaisons = [
        debut1 + fin2,
        debut2 + fin1,
        debut1 + debut2,
        fin1 + fin2,
    ].filter(n => n.length >= 2 && n.length <= 8);

    const nom = combinaisons[Math.floor(Math.random() * combinaisons.length)];
    return nom.charAt(0).toUpperCase() + nom.slice(1);
};

const verifierGrossesses = async (client) => {
    try {
        const maintenant = new Date();
        const grossessesTerminees = await Waifu.find({
            enGrossesse: true,
            finGrossesse: { $lte: maintenant },
            estVivante: true,
        });

        for (const maman of grossessesTerminees) {
            if (!maman.partenaireGrossesse) continue;

            const partenaire = await Waifu.findById(maman.partenaireGrossesse);
            if (!partenaire) continue;

            // Générer l'enfant
            const rareteEnfant = tirerRareteEnfant(maman.rarete, partenaire.rarete);
            const statsEnfant = genererStatsEnfant(maman, partenaire);
            const nomEnfant = genererNomEnfant(maman.nom, partenaire.nom);

            // Compétences héritées
            const competencesMaman = maman.competences || [];
            const competencesPartenaire = partenaire.competences || [];
            const toutesCompetences = [...competencesMaman, ...competencesPartenaire];
            const competencesHeritees = toutesCompetences
                .sort(() => Math.random() - 0.5)
                .slice(0, Math.floor(Math.random() * 3) + 1);

            // Créer l'enfant
            const enfant = await Waifu.create({
                nom: nomEnfant,
                description: `Enfant de ${maman.nom} et ${partenaire.nom}.`,
                rarete: rareteEnfant,
                type: Math.random() < 0.5 ? maman.type : partenaire.type,
                univers: 'Starlight',
                stats: statsEnfant,
                competences: competencesHeritees,
                proprietaire: maman.proprietaire,
                parents: [maman._id, partenaire._id],
                estEnfant: true,
                stadesCroissance: 'bebe',
            });

            // Ajouter l'enfant au joueur
            await Player.findOneAndUpdate(
                { userId: maman.proprietaire },
                { $push: { waifus: enfant._id } }
            );

            // Libérer les mamans
            maman.enGrossesse = false;
            maman.partenaireGrossesse = null;
            maman.finGrossesse = null;
            maman.estDisponible = true;
            await maman.save();

            partenaire.enGrossesse = false;
            partenaire.partenaireGrossesse = null;
            partenaire.finGrossesse = null;
            partenaire.estDisponible = true;
            await partenaire.save();

            // Notifier le joueur en DM
            try {
                const user = await client.users.fetch(maman.proprietaire);
                if (user) {
                    await user.send(`🍼 **Bonne nouvelle !** **${maman.nom}** et **${partenaire.nom}** ont eu un enfant !\n\n👶 **${nomEnfant}** est né(e) ! Rareté : **${rareteEnfant}**\n\nL'enfant grandit progressivement — surveille son évolution avec \`/collection\` !`);
                }
            } catch (e) {
                // DMs fermés, pas grave
            }
        }
    } catch (error) {
        console.error('Erreur vérification grossesses:', error);
    }
};

module.exports = verifierGrossesses;