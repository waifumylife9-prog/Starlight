const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    cles: { type: Number, default: 0 },
    monnaie: { type: Number, default: 0 },
    monnaieSec: { type: Number, default: 0 },
    waifus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Waifu' }],
    base: { type: mongoose.Schema.Types.ObjectId, ref: 'Base' },
    quetes: [{
        queteId: String,
        completee: { type: Boolean, default: false },
        progression: { type: Number, default: 0 },
    }],
    statistiques: {
        waifusInvoquees: { type: Number, default: 0 },
        combatsGagnes: { type: Number, default: 0 },
        combatsPerdus: { type: Number, default: 0 },
        raidsLances: { type: Number, default: 0 },
        raidsDefendus: { type: Number, default: 0 },
        raidsEffectues: { type: Number, default: 0 },
    },
    oc: {
        nom: { type: String, default: '' },
        genre: { type: String, default: 'femme_soumise' },
        bio: { type: String, default: '' },
        apparence: {
            cheveux: { type: String, default: '' },
            yeux: { type: String, default: '' },
            taille: { type: String, default: '' },
            morphologie: { type: String, default: '' },
            tenue: { type: String, default: '' },
        },
        faction: { type: String, default: '' },
        titre: { type: String, default: '' },
        waifuFavoriteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Waifu' },
    },
    dateCreation: { type: Date, default: Date.now },
    derniereConnexion: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Player || mongoose.model('Player', PlayerSchema);