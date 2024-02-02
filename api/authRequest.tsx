'use client';
import axios from 'axios';
import Auth from '@/modules/Auth/Auth';
import Router from '@/modules/Router/Router';

// env didn't work properly with codespace, if run local uncoment next line and comment the next 2 line.
// const baseUrl = process.env.BASEURL
const baseUrl = 'https://mohamedham.pythonanywhere.com';

const auth = new Auth();
const authRequest = axios.create({
  baseURL: baseUrl,
});

const route = Router();

authRequest.interceptors.request.use(
  (config) => {
    const token = auth.getToken();
    config.headers['Content-Type'] = 'application/json';

    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    route.push('/login');
    return Promise.reject(error);
  },
);

export default authRequest;
