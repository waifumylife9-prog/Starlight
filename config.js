module.exports = {
    // Raretés des waifus
    RARETES: {
        COMMUNE: { nom: 'Commune', emoji: '⬜', couleur: 0x9B9B9B, taux: 60 },
        PEU_COMMUNE: { nom: 'Peu commune', emoji: '🟩', couleur: 0x2ECC71, taux: 25 },
        RARE: { nom: 'Rare', emoji: '🟦', couleur: 0x3498DB, taux: 10 },
        EPIQUE: { nom: 'Épique', emoji: '🟪', couleur: 0x9B59B6, taux: 4 },
        LEGENDAIRE: { nom: 'Légendaire', emoji: '🟨', couleur: 0xF1C40F, taux: 1 },
        MYTHIQUE: { nom: 'Mythique', emoji: '🟥', couleur: 0xE74C3C, taux: 0.1 },
        WAIFU: { nom: 'Waifu', emoji: '🌸', couleur: 0xFF69B4, taux: 0 },
    },

    // Stades de lien
    LIENS: {
        INCONNUE: { nom: 'Inconnue', coeurs: '🤍🤍🤍🤍🤍', seuil: 0 },
        AMIE: { nom: 'Amie', coeurs: '❤️🤍🤍🤍🤍', seuil: 100 },
        PROCHE: { nom: 'Proche', coeurs: '❤️❤️🤍🤍🤍', seuil: 300 },
        CONFIDENTE: { nom: 'Confidente', coeurs: '❤️❤️❤️🤍🤍', seuil: 600 },
        AMOUREUSE: { nom: 'Amoureuse', coeurs: '❤️❤️❤️❤️🤍', seuil: 1000 },
        LIEE: { nom: 'Liée', coeurs: '❤️❤️❤️❤️❤️', seuil: 2000 },
    },

    // Stats de base
    STATS: ['hp', 'def', 'spd', 'crit', 'mgk', 'res'],

    // Stades de croissance
    CROISSANCE: {
        BEBE: { nom: 'Bébé', multiplicateur: 0.3 },
        ENFANT: { nom: 'Enfant', multiplicateur: 0.6 },
        ADULTE: { nom: 'Adulte', multiplicateur: 1.0 },
    },

    // Économie
    GROSSESSE_DUREE: 24 * 60 * 60 * 1000, // 24h en ms
    LIEN_DEGRADATION: 5, // points perdus par jour d'inactivité
};