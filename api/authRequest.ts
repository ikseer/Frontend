import axios from 'axios';
import Auth from '@/modules/Auth/Auth';
import { BACKEND_URL } from '@/lib/constants';

const authRequest = axios.create({
  baseURL: BACKEND_URL,
});

authRequest.interceptors.request.use(
  (config) => {
    const auth = new Auth();
    const { accessToken } = auth.getUserAuth();
    config.headers['Content-Type'] = 'application/json';
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default authRequest;
