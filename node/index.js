const express = require("express");
const cors = require("cors");
const app = express();

const Veiculos = require("./models/Veiculo");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization",
  );
  app.use(cors());
  next();
});

app.get("/", async (req, res) => {
  await Veiculos.findAll()
    .then((dataVeiculo) => {
      return res.json({
        dataVeiculo,
      });
    })
    .catch(() => {
      return res.status(400).json({
        mensagem: "Erro veículo não encontrado",
      });
    });
  //res.send({ foo: "Sucesso!" });
});

app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000!");
});
