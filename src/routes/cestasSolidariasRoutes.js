const express = require("express");
const routes = express.Router();
const controller = require("../controller/cestasSolidariasController");

routes.get("/", controller.getAll);



module.exports = routes