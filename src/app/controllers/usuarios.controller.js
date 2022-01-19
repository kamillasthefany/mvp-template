const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

const Usuarios = {
    async all(request, response) {
        try {
            const usuarios = await Usuario.findAll();
            return response.status(200).json(usuarios);
        }
        catch (error) {
            return response.status(500).json(error);
        }

    },
    async create(request, response) {

        try {
            const { nome, email, senha } = request.body;
            const senhaBcrypt = await bcrypt.hash(senha, 10);
            const usuario = await Usuario.create({ nome, email, senha: senhaBcrypt, admin: false, aprovado: false, deletado: false });
            return response.status(201).json(usuario);
        }
        catch (error) {
            return response.status(500).json(error);
        }

    },
};

module.exports = Usuarios;