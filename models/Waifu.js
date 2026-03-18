const mongoose = require('mongoose');

const WaifuSchema = new mongoose.Schema({
    // Identité
    nom: { type: String, required: true },
    description: { type: String, default: '' },
    apparence: { type: String, default: '' },
    rarete: { type: String, required: true },
    type: { type: String, default: 'Neutre' },

    // Propriétaire
    proprietaire: { type: String, required: true },

    // Stats de base
    stats: {
        hp: { type: Number, default: 100 },
        def: { type: Number, default: 10 },
        spd: { type: Number, default: 10 },
        crit: { type: Number, default: 5 },
        mgk: { type: Number, default: 10 },
        res: { type: Number, default: 10 },
    },

    // Progression
    niveau: { type: Number, default: 1 },
    xp: { type: Number, default: 0 },
    pointsStat: { type: Number, default: 0 },

    // Compétences — Mixed pour accepter tout format
    competences: { type: mongoose.Schema.Types.Mixed, default: [] },

    // Lien
    lien: { type: Number, default: 0 },
    dernierInteraction: { type: Date, default: Date.now },

    // Hérédité
    parents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Waifu'
    }],
    estEnfant: { type: Boolean, default: false },
    stadesCroissance: {
        type: String,
        enum: ['bebe', 'enfant', 'adulte'],
        default: 'adulte'
    },
    dateNaissance: { type: Date, default: Date.now },

    // Grossesse
    enGrossesse: { type: Boolean, default: false },
    partenaireGrossesse: { type: mongoose.Schema.Types.ObjectId, ref: 'Waifu' },
    finGrossesse: { type: Date },

    // État
    estVivante: { type: Boolean, default: true },
    estBlessée: { type: Boolean, default: false },
    estDisponible: { type: Boolean, default: true },

    dateInvocation: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Waifu', WaifuSchema);