require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/mongoConfig");
const  swaggerUi  =  require('swagger-ui-express')  
const  swaggerDocument  =  require('./swagger.json')


const app = express();

db.connect();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const routesCestas = require("./routes/cestasSolidariasRoutes");
const routesLogin = require("./routes/loginUsuarioRoutes");
const index = require("./routes/indexRoutes");

app.use("/users", routesCestas);
app.use("/helpers", routesLogin);
app.use("/", index);

app.get("/terms", (req, res) => {
    return res.json({
        message: "Termos de Serviço"
    })
})


module.exports = app 