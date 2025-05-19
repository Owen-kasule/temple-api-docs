const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    established: {
        type: Date,
        required: true
    },
    services: {
        type: [String],
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Temple', templeSchema);