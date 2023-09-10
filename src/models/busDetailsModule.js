const mongoose = require('mongoose');

const busDetailsSchema = new mongoose.Schema({
    runningDay: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    seatType: {
        type: Array,
        required: true,
    },
    seatInfo: {
        type: Array,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    depTime: {
        type: String,
        required: true,
    },
    arrTime: {
        type: String,
        required: true,
    },
    timeduration: {
        type: String,
        required: true,
    },
    pickPoint: {
        type: String,
        required: true,
    },
    dropPoint: {
        type: String,
        required: true,
    },
    depPoint: {
        type: String,
        required: true,
    },
    arrPoint: {
        type: String,
        required: true,
    },
    busSeatData: {
        type: Object,
        required: true,
    },
})

module.exports = mongoose.model('busDetails',busDetailsSchema);