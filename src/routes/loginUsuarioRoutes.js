const express = require("express");
const routes = express.Router();
const { checkAuth } = require("../middlewares/authCestasSolidarias");
const controller = require("../controller/loginUsuarioController");

routes.get("/", checkAuth, controller.getAll);
routes.get("/private", controller.getPrivate);
routes.post("/register", controller.register);
routes.post('/login', controller.login);





module.exports = routes