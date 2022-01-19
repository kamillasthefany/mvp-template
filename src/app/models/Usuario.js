const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      aprovado: DataTypes.BOOLEAN,
      deletado: DataTypes.BOOLEAN,
      admin: DataTypes.BOOLEAN,
      reset_token: DataTypes.STRING,
      reset_expires: DataTypes.DATE,
    },
      {
        sequelize: connection,
        tableName: 'usuarios',
      });

    return this;
  }
}

module.exports = Usuario;