const { Sequelize } = require("sequelize");

const Usuario = require('../app/models/Usuario');
const Noticia = require('../app/models/Noticia');
const Token = require('../app/models/Token');

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
Noticia.init(sequelize);
Token.init(sequelize);

sequelize
  .authenticate()
  .then(() => console.log("Conectado com sucesso"))
  .catch((error) => console.error("Erro ao conectar: ", error));

module.exports = sequelize;