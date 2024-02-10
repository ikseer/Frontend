'use client';
import axios from 'axios';
import Auth from '@/modules/Auth/Auth';
// import { redirect } from 'next/navigation'

// env didn't work properly with codespace, if run local uncoment next line and comment the next 2 line.
// const baseUrl = process.env.BASEURL
const baseUrl = 'https://ikseer.azurewebsites.net';

const auth = new Auth();
const authRequest = axios.create({
  baseURL: baseUrl,
});

authRequest.interceptors.request.use(
  (config) => {
    const token = auth.getToken();
    config.headers['Content-Type'] = 'application/json';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // redirect('/login')
    return Promise.reject(error);
  },
);

export default authRequest;
