const { Model, DataTypes } = require('sequelize');

class Noticia extends Model {
  static init(connection) {
    super.init({
      link: DataTypes.STRING,
      palavras_chave: DataTypes.STRING,
      aprovado: DataTypes.BOOLEAN,
      usuario_id: DataTypes.INTEGER,
    },
      {
        sequelize: connection,
        tableName: 'noticias',
      });

    return this;
  }
}

module.exports = Noticia;