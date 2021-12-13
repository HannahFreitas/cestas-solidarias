const express = require("express");
const routes = express.Router();
const { checkAuth } = require("../middlewares/authCestasSolidarias");
const controller = require("../controller/loginUsuarioController");

routes.get("/", checkAuth, controller.getAll);
routes.get("/private", controller.getPrivate);
routes.get("/find/:id", controller.getById);
routes.get("/name", controller.getUsersByName);
routes.post("/register", controller.register);
routes.post('/login', controller.login);
routes.put("/update/:id", controller.updateLogin);
routes.delete("/delete/:id", controller.deleteLogin);





module.exports = routes