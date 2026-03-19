const mongoose = require('mongoose');

const BaseSchema = new mongoose.Schema({
    proprietaire: { type: String, required: true, unique: true },
    taille: { type: Number, default: 5 },
    grille: { type: Array, default: [] },
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
    defenses: [{
        type: { type: String, required: true },
        niveau: { type: Number, default: 1 },
        position: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
    }],
    decorations: [{
        type: { type: String, required: true },
        position: {
            x: { type: Number, required: true },
            y: { type: Number, required: true },
        },
        bonus: { type: Object, default: {} },
    }],
    ressources: {
        metal: { type: Number, default: 100 },
        energie: { type: Number, default: 100 },
        nourriture: { type: Number, default: 100 },
        materiaux: { type: Number, default: 100 },
    },
    capaciteWaifus: { type: Number, default: 10 },
    niveauDefense: { type: Number, default: 0 },
    coordonnees: {
        x: { type: Number, default: () => Math.floor(Math.random() * 1000) },
        y: { type: Number, default: () => Math.floor(Math.random() * 1000) },
    },
    espions: [{
        poseurId: String,
        datepose: Date,
        expiration: Date,
    }],
    dateCreation: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Base || mongoose.model('Base', BaseSchema);