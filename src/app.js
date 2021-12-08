require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const routesCestas = require("./routes/cestasSolidariasRoutes");
const index = require("./routes/indexRoutes");

app.use("/users", routesCestas);
app.use("/", index);

module.exports = app 