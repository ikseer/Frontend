import axios from 'axios';
import Auth from '@/modules/Auth/Auth';

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const authRequest = axios.create({
  baseURL: baseUrl,
});

authRequest.interceptors.request.use(
  (config) => {
    const auth = new Auth();
    const { accessToken } = auth.getUserAuth();

    console.log(accessToken, 'token from Auth Request for Phone');
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
