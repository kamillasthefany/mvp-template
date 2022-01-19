const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
require("dotenv").config();

module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) return response.status(401).send({ error: "Não autorizado" });

  const [scheme, token] = authHeader.split(' ');

  jwt.verify(token, process.env.SECRET, async (error, decoded) => {
    if (error) {
      return response.status(401).send({ error: "Token inválido" });
    }

    const tokenExistente = await Token.findOne({ where: { token } });

    if (tokenExistente.expira_em < Date.now()) {
      await tokenExistente.destroy();
      return response.status(401).send({ error: "Token inválido" });
    }

    request.userId = decoded.id;
    return next();
  });
}