const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    whatsapp: {
        type: Boolean,
        required: true
    },
    cpf: {
        type: Number,
        required: true,
        select: false
    },
    bairro: {
        type: String,
        required: true
    }, 
    pix: {
        type: String,
        required: true
    }
})

const Users = mongoose.model("users", userSchema);

module.exports = Users