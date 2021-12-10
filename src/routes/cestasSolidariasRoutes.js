const express = require("express");
const routes = express.Router();
const controller = require("../controller/cestasSolidariasController");

routes.get("/", controller.getAll);
routes.post("/create", controller.createUsers);



module.exports = routes