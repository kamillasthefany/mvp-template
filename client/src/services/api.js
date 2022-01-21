import axios from 'axios';

const getToken = async () => {
  try {
    const user = await JSON.parse(localStorage.getItem('user'));
    return user.auth.token;
  } catch (e) {
    return "";
  }
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  const currentConfig = config;
  if (token) {
    currentConfig.headers["Authorization"] = `Bearer ${token}`;
  }
  return currentConfig;
});

export default api;