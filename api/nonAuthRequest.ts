import axios from 'axios';
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
console.log(process, 'process');
console.log(process.env, 'process env');

const nonAuthRequest = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default nonAuthRequest;
