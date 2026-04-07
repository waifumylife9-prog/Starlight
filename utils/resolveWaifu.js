const Waifu = require('../models/Waifu');

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Résout une waifu à partir de la saisie du joueur.
 * Formats acceptés :
 *   "Amber"     → retourne l'unique Amber, ou liste les #index si plusieurs
 *   "Amber #2"  → retourne exactement l'Amber avec index 2
 *
 * Retourne : { waifu, erreur }
 *   - waifu  : le document Mongoose, ou null si erreur
 *   - erreur : string à envoyer au joueur, ou null si succès
 */
async function resolveWaifu(userId, input, { vivanteSeulement = true } = {}) {
    const match = input.trim().match(/^(.+?)\s*#(\d+)$/);
    let nom, index;

    if (match) {
        nom = match[1].trim();
        index = parseInt(match[2], 10);
    } else {
        nom = input.trim();
        index = null;
    }

    const filtre = {
        proprietaire: userId,
        nom: { $regex: new RegExp(`^${escapeRegex(nom)}$`, 'i') },
    };
    if (vivanteSeulement) filtre.estVivante = true;

    if (index !== null) {
        filtre.index = index;
        const waifu = await Waifu.findOne(filtre);
        if (!waifu) {
            return {
                waifu: null,
                erreur: `❌ Tu ne possèdes pas de **${nom} #${index}**.`,
            };
        }
        return { waifu, erreur: null };
    }

    const toutes = await Waifu.find(filtre).sort({ index: 1 });

    if (toutes.length === 0) {
        return {
            waifu: null,
            erreur: `❌ Tu ne possèdes pas de waifu nommée **${nom}**.`,
        };
    }

    if (toutes.length === 1) {
        return { waifu: toutes[0], erreur: null };
    }

    // Plusieurs → demander de préciser
    const liste = toutes.map(w => `• **${w.nom} #${w.index}**`).join('\n');
    return {
        waifu: null,
        erreur: `❌ Tu possèdes **${toutes.length} ${nom}**. Précise laquelle :\n${liste}`,
    };
}

module.exports = resolveWaifu;