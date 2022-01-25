const Venda = require('../models/Venda');

const Vendas = {
  async all(request, response) {
    try {
      const vendas = await Venda.findAll();
      return response.status(200).json(vendas);
    }
    catch (error) {
      return response.status(500).json(error);
    }

  },
  async create(request, response) {

    try {
      const { cliente_id, usuario_id, observacao } = request.body;

      const venda = await Venda.create({ cliente_id, usuario_id, observacao });
      return response.status(201).json(venda);
    }
    catch (error) {
      return response.status(500).json(error);
    }

  },
};

module.exports = Vendas;