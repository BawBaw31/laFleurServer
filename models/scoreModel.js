const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
    player: {
        type: String,
        required: true,
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Score', scoreSchema);