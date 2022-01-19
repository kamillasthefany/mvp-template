const Noticia = require('../models/Noticia');

const Noticias = {

  async index(request, response, next) {
    try {
      const noticias = await Noticia.findAll();
      return response.status(201).json(noticias);
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).json(error);
    }
  },
  async create(request, response, next) {

    try {
      const { link, palavras } = request.body;
      const result = await Noticia.create({ link, palavras_chave: palavras, aprovado: false, usuario_id: 2 });
      return response.status(201).json(result);
    }
    catch (error) {
      return response.status(500).json(error);
    }

  },
};

module.exports = Noticias;