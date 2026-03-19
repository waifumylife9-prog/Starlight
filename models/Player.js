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
    },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.models.Player || mongoose.model('Player', PlayerSchema);