const express = require("express");
const routes = express.Router();
const controller = require("../controller/cestasSolidariasController");

routes.get("/", controller.getAll);
routes.get("/private", controller.getPrivate);
routes.get("/find/:id", controller.getById);
routes.get("/name", controller.getUsersByName);
routes.post("/create", controller.createUsers);
routes.put("/update/:id", controller.updateUsers);
routes.delete("/delete/:id", controller.deleteUsers);



module.exports = routes