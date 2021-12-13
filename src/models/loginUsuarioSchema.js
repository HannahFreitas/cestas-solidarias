const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required:true
    },
    cpf: {
        type: Number,
        required: true,
        select: false,
        unique: true
    }, 
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    termosDeUso: {
        type: String,
        required:true,
        default: false
    }
}, { timestamps: true })

const Login = mongoose.model("login", loginSchema);

module.exports = Login