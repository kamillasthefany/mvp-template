const express = require('express');
const routes = express.Router();

const Usuario = require('./app/controllers/usuarios.controller');
const Autenticacao = require('./app/controllers/autenticacao.controller');
const Noticias = require('./app/controllers/noticias.controller');
const Tweet = require('./app/controllers/tweet.controller');

const authMiddleware = require('./app/middlewares/auth');

//USUÁRIOS
routes.get('/usuarios', Usuario.all);
routes.post('/usuarios', Usuario.create);
//routes.get('/usuarios', authMiddleware, Usuario.all);

//AUTENTICACAO
routes.post('/autenticacao', Autenticacao.index);
routes.post('/esqueci_senha', Autenticacao.esqueciSenha);
routes.post('/reset_senha', Autenticacao.resetarSenha);
routes.post('/sair', Autenticacao.logout);

//ARQUIVOS
routes.get('/noticias', authMiddleware, Noticias.index);
routes.post('/noticias', authMiddleware, Noticias.create);

//TWEET
routes.get('/tweet', Tweet.index);

module.exports = routes;