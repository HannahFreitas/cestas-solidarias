const Login = require("../models/loginUsuarioSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { hashPassword } = require('../helpers/authCestasSolidarias');

const getPrivate = async(req, res) => {
    try {
        const users = await Login.find();
        res.status(200).json({message: "Lista de pessoas que se cadastraram:", users})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getAll = async(req, res) => {
    try {
        const users = await Login.find().select("+cpf +password");
        res.status(200).json({message: "Lista de pessoas que se cadastraram:", users})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const register = async(req, res) => {
    const { name, email, password, cpf } = req.body;

    try {
        const newUser = new Login({
            name,
            email,
            cpf,
            password
        })

        
        const passwordHashed = await hashPassword(newUser.password, res);

        newUser.password = passwordHashed;

        const saveUser = await newUser.save();
        res.status(201).json({
            messagem: "Pessoa cadastrada com sucesso",
            saveUser
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Login.findOne({ email: email }).select("+password");

        if (!user) {
            return res.status(422).send({ message: "Email não encontrado!" })
        }
        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return res.status(422).send({ message: "Senha incorreta!" });
        }

        const secret = process.env.SECRET;
        const token = jwt.sign({ id: user._id }, secret);

        res.status(200).json({
            message: "Token deu bom!",
            token
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updateLogin = async (req, res) => {
    try {
        const updateUser = await Login.findById(req.params.id);
        if (updateUser) {
          
            updateUser.name = req.body.name || updateUser.name
            updateUser.email = req.body.email || updateUser.email
            updateUser.password = req.body.password || updateUser.password
            
            const passwordHashed = await hashPassword(updateUser.password, res);

            updateUser.password = passwordHashed;

            const saveUser = await updateUser.save();
            res.status(200).json({
                message: "Usuário atualizado com sucesso",
                saveUser
            })
        }

        res.status(400).json({
            mensagem: "Descupa, mas não conseguimos encontrar esse usuário"
        })
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
}

const deleteLogin = async(req, res) => {
    try {
        const users = await Login.findById(req.params.id);

        if (users == null) {
            return res.status(404).json({ message: "Usuário não encontrado." })
        }

        await users.delete();
        return res.status(200).json({ message: "Cadastro deletado com sucesso." })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getAll,
    getPrivate,
    register,
    login,
    updateLogin,
    deleteLogin
}