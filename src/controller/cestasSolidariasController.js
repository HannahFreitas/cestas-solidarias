const Users = require("../models/cestasSolidariasSchema");



const getAll = async(req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({message: "Lista de pessoas que precisam de doações:", users})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAll
}