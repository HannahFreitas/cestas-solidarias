const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
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
    },
    termosDeUso: {
        type: Boolean,
        required: true,
        default: false
    },
    informaçao: {
        type: String,
        required: true,
        min: 100,
        max: 900
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

const Users = mongoose.model("users", userSchema);

module.exports = Users