const mongoose = require('mongoose');
const foodPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },