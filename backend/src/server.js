require("dotenv").config();

const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Fraud Shield AI rodando na porta ${PORT}`)
});