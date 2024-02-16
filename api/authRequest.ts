import axios from 'axios';
import Auth from '@/modules/Auth/Auth';

const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
console.log(baseUrl);

const auth = new Auth();

const authRequest = axios.create({
  baseURL: baseUrl,
});

authRequest.interceptors.request.use(
  (config) => {
    auth.prepareUserAuth();
    const token = auth.getToken();
    console.log(token, 'token from Auth Request for Phone');
    config.headers['Content-Type'] = 'application/json';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default authRequest;
