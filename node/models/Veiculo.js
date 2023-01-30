const Sequelize = require("sequelize");
const db = require("./db");

const Veiculo = db.define("veiculo", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  foto: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quilometragem: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  tipo_cambio: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contato_loja: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Criar a tabela no BANCO DE DADOS
//Veiculo.sync();

module.exports = Veiculo;
