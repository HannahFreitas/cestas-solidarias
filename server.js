const app = require("./src/app");
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Vemos aqui claramente, que estamos na porta ${PORT}`));