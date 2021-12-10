const Users = require("../models/cestasSolidariasSchema");



const getPrivate = async(req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({message: "Lista de pessoas que precisam de doações:", users})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getAll = async(req, res) => {
    try {
        const users = await Users.find().select("+celular +email +pix");
        res.status(200).json({message: "Lista de pessoas que precisam de doações:", users})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createUsers = async(req, res) => {
    try {
        const users = await new Users(req.body);
        const saveUsers = await users.save();
        

        res.status(201).json({
            message: "Cadastro realizado com sucesso.",
            saveUsers
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAll,
    createUsers,
    getPrivate
}