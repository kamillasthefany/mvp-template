const { Model, DataTypes } = require('sequelize');

class Token extends Model {
  static init(connection) {
    super.init({
      token: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
      expira_em: DataTypes.DATE,
    },
      {
        sequelize: connection,
        tableName: 'token',
      });

    return this;
  }
}

module.exports = Token;