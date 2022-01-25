const { Model, DataTypes } = require('sequelize');

class Venda extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
      cliente_id: DataTypes.INTEGER,
      observacao: DataTypes.STRING,
    },
      {
        sequelize: connection,
        tableName: 'vendas',
      });

    return this;
  }
}

module.exports = Venda;