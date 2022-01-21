import api from '../api';

export const authenticate = async (usuario) => {
  const result = await api.post('/autenticacao', usuario);
  return result;
};

export const logout = async (auth) => {
  const result = await api.post('/sair', { auth });
  return result;
}