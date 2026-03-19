const mongoose = require('mongoose');

const WaifuImageSchema = new mongoose.Schema({
    nom: { type: String, required: true, unique: true },
    url: { type: String, required: true },
});

module.exports = mongoose.model('WaifuImage', WaifuImageSchema);