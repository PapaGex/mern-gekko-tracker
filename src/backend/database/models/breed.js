const mongoose = require('mongoose');

const breedSchema = new mongoose.Schema({
    latinName: {
        type: String,
        required: true
    },
    commonName: {
        type: String,
        required: true
    },
    naturalHabitat: {
        type: String,
        required: true
    },
    tempHigh: {
        type: String,
        required: true
    },
    tempLow: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    },
    specialReqs: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Breed', breedSchema);
