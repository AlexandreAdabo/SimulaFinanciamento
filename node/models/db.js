const Sequelize = require("sequelize");

const sequelize = new Sequelize("listra", "root", "Max230697@", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com banco de dados realizada com sucesso!");
  })
  .catch(() => {
    console.log("Erro ao conectar ao banco de dados");
  });

module.exports = sequelize;
