const { Sequelize } = require("sequelize");

const Usuario = require('../app/models/Usuario');
const Token = require('../app/models/Token');
const Cliente = require('../app/models/Cliente');
const Venda = require('../app/models/Venda');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: true,
    underscored: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

Usuario.init(sequelize);
Token.init(sequelize);
Cliente.init(sequelize);
Venda.init(sequelize);

sequelize
  .authenticate()
  .then(() => console.log("Conectado com sucesso"))
  .catch((error) => console.error("Erro ao conectar: ", error));

module.exports = sequelize;