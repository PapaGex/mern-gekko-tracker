const mongoose = require('mongoose');

const geckoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    latinName: {
        type: String,
        required: true,
        ref: 'Breed'
    },
    origin: {
        type: String,
        required: true
    },
    hatchDate: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Gecko', geckoSchema);