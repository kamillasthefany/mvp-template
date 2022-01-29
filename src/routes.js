const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Usuario = require('./app/controllers/usuarios.controller');
const Autenticacao = require('./app/controllers/autenticacao.controller');
const Cliente = require('./app/controllers/clientes.controller');

const authMiddleware = require('./app/middlewares/auth');

//USUÁRIOS
routes.get('/usuarios', authMiddleware, Usuario.all);
routes.post('/usuarios', authMiddleware, Usuario.create);

//AUTENTICACAO
routes.post('/autenticacao', Autenticacao.index);
routes.post('/esqueci_senha', Autenticacao.esqueciSenha);
routes.post('/reset_senha', Autenticacao.resetarSenha);
routes.post('/sair', Autenticacao.logout);

//UPLOAD
routes.post('/upload', multer(multerConfig).single('file'), Cliente.upload);

module.exports = routes;