const mongoose = require('mongoose');

const BaseSchema = new mongoose.Schema({
    proprietaire: { type: String, required: true, unique: true },
    
    // Grille 2D
    taille: { type: Number, default: 5 }, // 5x5 au départ
    grille: { type: Array, default: [] },

    // Salles construites
    salles: [{
        type: { type: String, required: true },
        niveau: { type: Number, default: 1 },
        position: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        enConstruction: { type: Boolean, default: false },
        finConstruction: { type: Date },
    }],

    // Défenses
    defenses: [{
        type: { type: String, required: true },
        niveau: { type: Number, default: 1 },
        position: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
    }],

    // Déco
    decorations: [{
        type: { type: String, required: true },
        position: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        bonus: { type: Object, default: {} },
    }],

    // Ressources
    ressources: {
        metal: { type: Number, default: 100 },
        energie: { type: Number, default: 100 },
        nourriture: { type: Number, default: 100 },
        materiaux: { type: Number, default: 100 },
    },

    // Stats de la base
    capaciteWaifus: { type: Number, default: 5 },
    niveauDefense: { type: Number, default: 0 },
    
    // Coordonnées (pour les raids)
    coordonnees: {
        x: { type: Number, default: () => Math.floor(Math.random() * 1000) },
        y: { type: Number, default: () => Math.floor(Math.random() * 1000) },
    },

    // Dispositifs d'espionnage
    espions: [{
        poseurId: String,
        datepose: Date,
        expiration: Date,
    }],

    dateCreation: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Base', BaseSchema);