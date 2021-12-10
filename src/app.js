require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/mongoConfig");

const app = express();

app.use(express.json());
app.use(cors());


const routesCestas = require("./routes/cestasSolidariasRoutes");
const routesLogin = require("./routes/loginUsuarioRoutes");
const index = require("./routes/indexRoutes");

app.use("/users", routesCestas);
app.use("/helpers", routesLogin);
app.use("/", index);

db.connect();

module.exports = app 