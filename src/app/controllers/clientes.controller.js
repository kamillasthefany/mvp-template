const Cliente = require('../models/Cliente');

const Clientes = {
  async upload(request, response) {
    try {
      console.log('request', request);
      return response.status(200).json('sucesso upload');
    }
    catch (error) {
      return response.status(500).json(error);
    }

  },
  async all(request, response) {
    try {
      const clientes = await Cliente.findAll();
      return response.status(200).json(clientes);
    }
    catch (error) {
      return response.status(500).json(error);
    }

  },
  async create(request, response) {

    try {
      const { nome, cpf, data_nascimento, email, telefone } = request.body;

      const cliente = await Cliente.create({ nome, cpf, data_nascimento, email, telefone });
      return response.status(201).json(cliente);
    }
    catch (error) {
      return response.status(500).json(error);
    }

  },
};

module.exports = Clientes;