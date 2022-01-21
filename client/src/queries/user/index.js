import { useQuery } from 'react-query';
import { post } from '../../services/user/index';
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