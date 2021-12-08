const express = require("express");
const routes = express.Router();

routes.get("/",  (req, res) => {
    res.status(200).send({
        title: "Reprograma -> Cestas Solidárias - Projeto Final",
        version: "1.0.0",
        mensagem: "Olá, ser humano do outro lado da tela, aqui você encontra a primeira versão deste projeto, uma API focada em cadastro de pessoas em situação de vulnerabilidade social."
    })
})

module.exports = routes