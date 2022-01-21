require("dotenv").config();
const Usuario = require('../models/Usuario');
const Token = require('../models/Token');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');


const Autenticacao = {

  async index(request, response, next) {

    try {
      const { email, senha } = request.body;
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario)
        return response.status(400).send({ erro: 'Usuário não encontrado' });

      const resultado = await bcrypt.compare(senha, usuario.senha);

      if (!resultado)
        return response.status(400).send({ erro: 'Senha incorreta' });

      const token = jwt.sign({ id: usuario.id }, process.env.SECRET, {
        expiresIn: 86400,
      });

      let hoje = new Date();
      let amanha = new Date();
      amanha.setDate(hoje.getDate() + 1);

      const newToken = {
        token: token,
        usuario_id: usuario.id,
        expira_em: amanha
      };

      await Token.create(newToken);

      usuario.senha = undefined;

      return response.status(200).send({ usuario, token });
    }
    catch (error) {
      console.log('error', error);
      return response.status(500).send({ error: `Falha ao autenticar ${error}` });

    }
  },
  async esqueciSenha(request, response, next) {
    try {

      const { email } = request.body;
      const usuario = await Usuario.findOne({ email });

      if (!usuario)
        return response.status(400).send({ erro: 'Usuário não encontrado' });

      const token = crypto.randomBytes(20).toString('hex');
      const now = new Date();
      now.setHours(now.getHours() + 1);

      usuario.reset_token = token;
      usuario.reset_expires = now;

      await usuario.save();

      mailer.sendMail({
        to: email,
        from: process.env.MAIL_SEND,
        template: '/reset_senha',
        context: { token },
      }, (error) => {
        if (error) {
          return response.status(400).send({ error: 'Erro ao enviar email' });
        }
        return response.status(200).send('Email enviado com sucesso');
      });

      return response.status(200).send('sucesso');

    }
    catch (error) {
      return response.status(400).send({ error: 'Falha ao resetar senha' });
    }
  },
  async resetarSenha(request, response, next) {
    try {

      const { email, token, senha } = request.body;
      const usuario = await Usuario.findOne({ email });

      if (!usuario)
        return response.status(400).send({ erro: 'Usuário não encontrado' });

      if (token != usuario.reset_token)
        return response.status(400).send({ erro: 'Token inválido' });

      const now = new Date();

      if (now > usuario.reset_expires)
        return response.status(400).send({ erro: 'Token expirado' });

      const senhaBcrypt = await bcrypt.hash(senha, 10);
      usuario.senha = senhaBcrypt;
      await usuario.save();

      return response.status(200).send('sucesso');

    }
    catch (error) {
      return response.status(400).send({ error: 'Falha ao resetar senha' });
    }
  },

  async logout(request, response, next) {

    try {
      const { auth } = request.body;
      const token = await Token.findOne({ where: { token: auth } });
      await token.destroy();
      return response.status(200).send('sucesso');
    }
    catch (error) {
      return response.status(500).json(error);
    }

  },
};

module.exports = Autenticacao;