import axios from 'axios';
import { BACKEND_URL } from '@/lib/constants';

const nonAuthRequest = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default nonAuthRequest;
