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

const getUsersByName = async (req, res) => {
    const name = req.query.name;
	await Users.find({ name: name })

    return res.status(200).send(Users)
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

const updateUsers = async (req, res) => {
    try {
        const updateUser = await Users.findById(req.params.id);
        if (updateUser) {
          
            updateUser.name = req.body.name || updateUser.name
            updateUser.email = req.body.email || updateUser.email
            updateUser.celular = req.body.celular || updateUser.celular
            updateUser.whatsapp = req.body.whatsapp || updateUser.whatsapp
            updateUser.bairro = req.body.bairro || updateUser.bairro
            updateUser.pix = req.body.pix || updateUser.pix
            updateUser.informacao = req.body.informacao || updateUser.informacao

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

const deleteUsers = async(req, res) => {
    try {
        const users = await Users.findById(req.params.id);

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
    createUsers,
    getPrivate,
    getUsersByName,
    updateUsers,
    deleteUsers
}