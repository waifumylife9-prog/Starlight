const { RARETES } = require('../config');

// Sélectionne une rareté aléatoire selon les taux
const tirerRarete = () => {
    const rand = Math.random() * 100;
    let cumul = 0;

    for (const [cle, rarete] of Object.entries(RARETES)) {
        if (cle === 'WAIFU') continue; // event uniquement
        cumul += rarete.taux;
        if (rand <= cumul) return cle;
    }

    return 'COMMUNE';
};

// Génère les stats de base selon la rareté
const genererStats = (rarete) => {
    const multiplicateurs = {
        COMMUNE: 1,
        PEU_COMMUNE: 1.2,
        RARE: 1.5,
        EPIQUE: 2,
        LEGENDAIRE: 3,
        MYTHIQUE: 5,
        WAIFU: 4,
    };

    const mult = multiplicateurs[rarete] || 1;

    return {
        hp: Math.floor((80 + Math.random() * 40) * mult),
        def: Math.floor((8 + Math.random() * 10) * mult),
        spd: Math.floor((8 + Math.random() * 10) * mult),
        crit: Math.floor((3 + Math.random() * 8) * mult),
        mgk: Math.floor((8 + Math.random() * 10) * mult),
        res: Math.floor((8 + Math.random() * 10) * mult),
    };
};

// Génère les stats d'un enfant à partir de 2 parents
const genererStatsEnfant = (parent1, parent2) => {
    const stats = {};
    const statsList = ['hp', 'def', 'spd', 'crit', 'mgk', 'res'];

    for (const stat of statsList) {
        // Tendance aléatoire vers l'un des parents
        const tendance = Math.random();
        let valeur;

        if (tendance < 0.45) {
            // Tendance parent 1
            valeur = parent1.stats[stat] * (0.85 + Math.random() * 0.3);
        } else if (tendance < 0.9) {
            // Tendance parent 2
            valeur = parent2.stats[stat] * (0.85 + Math.random() * 0.3);
        } else {
            // Mutation !
            const base = (parent1.stats[stat] + parent2.stats[stat]) / 2;
            valeur = base * (1.2 + Math.random() * 0.5);
        }

        stats[stat] = Math.floor(valeur);
    }

    return stats;
};

// Détermine la rareté d'un enfant
const tirerRareteEnfant = (rarete1, rarete2) => {
    const ordre = ['COMMUNE', 'PEU_COMMUNE', 'RARE', 'EPIQUE', 'LEGENDAIRE', 'MYTHIQUE', 'WAIFU'];
    const idx1 = ordre.indexOf(rarete1);
    const idx2 = ordre.indexOf(rarete2);
    const idxMax = Math.max(idx1, idx2);

    // 10% de chance de monter d'un cran
    if (Math.random() < 0.1 && idxMax < ordre.length - 1) {
        return ordre[idxMax + 1];
    }

    // Sinon aléatoire entre les deux raretés
    return Math.random() < 0.5 ? rarete1 : rarete2;
};

module.exports = { tirerRarete, genererStats, genererStatsEnfant, tirerRareteEnfant };