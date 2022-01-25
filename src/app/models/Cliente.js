const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      telefone: DataTypes.STRING,
      data_nascimento: DataTypes.DATE,
    },
      {
        sequelize: connection,
        tableName: 'clientes',
      });

    return this;
  }
}

module.exports = Cliente;