import api from '../api';

export const post = async (usuario) => {
  const result = await api.post('/autenticacao', usuario);
  return result;
};

export const cadastro = async (usuario) => {
  const result = await api.post('/usuarios', usuario);
  return result;
};

export const get = async () => {
  const result = await api.get('/usuarios');
  return result;
};