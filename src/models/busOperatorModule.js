const mongoose = require('mongoose');

const busOperatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('busOperator',busOperatorSchema);