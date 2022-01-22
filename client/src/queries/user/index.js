import { useQuery } from 'react-query';
import { post, cadastro, get } from '../../services/user/index';
import { logout } from '../../services/auth/index';

export const useEfetuarLogin = (usuario) => {
  const { isLoading, data, isError } = useQuery("login", () =>
    post(usuario)
  );
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};

export const useEfetuarLogout = (usuario) => {
  const { isLoading, data, isError } = useQuery("logout", () =>
    logout(usuario)
  );
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};

export const useCadastrarUsuario = (usuario) => {
  const { isLoading, data, isError } = useQuery("cadastrar", () =>
    cadastro(usuario)
  );
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};

export const useObterUsuarios = () => {
  const { isLoading, data, isError } = useQuery("obterUsuarios", () => get());
  return {
    isLoading: isLoading,
    data: data?.data,
    error: isError
  };
};