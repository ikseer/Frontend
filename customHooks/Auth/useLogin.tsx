'use client';
import { useMutation } from '@tanstack/react-query';
// import axios from 'axios'
import nonAuthRequest from '@/api/nonAuthRequest';
import Auth from '@/modules/Auth/Auth';
import { useRouter } from 'next/navigation';

interface LoginType {
  username: string;
  password: string;
}
interface NewDataType {
  email: string;
  password: string;
}
let newData: NewDataType = {
  email: '',
  password: '',
};

const handleSendData = (data: LoginType) => {
  for (const [key, value] of Object.entries(data)) {
    if (key === 'username') {
      newData.email = value;
    } else {
      // @ts-ignore
      newData[key] = value;
    }
  }
};

const login = async (data: LoginType) => {
  handleSendData(data);
  const response = await nonAuthRequest.post('/accounts/login/', newData);
  return response;
};

const auth = new Auth();
export const useLogin = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: login,
    onMutate: (data) => {
      console.log(data);
    },
    onSuccess: (data) => {
      const userObject = {
        ...data.data.user,
        token: data.data.access,
        refresh: data.data.refresh,
      };
      auth.setUser(userObject);
      route.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      console.log('done');
    },
  });
};
