const twitter = require('../../services/twitter');

module.exports = {
  async index(request, response) {
    try {
      const { palavraChave } = request.body;

      //const result = await twitter.run(palavraChave);
      // console.log('resultado service', result);
      return response.status(200).json('sucesso');
    }
    catch (exc) {
      console.log('erro no controler', exc);
      return response.status(400).json(`erro: ${exc}`);
    }
  }
}