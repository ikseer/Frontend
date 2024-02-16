'use client';

// Main
import { useMutation } from '@tanstack/react-query';

// API & React Query
import nonAuthRequest from '@/api/nonAuthRequest';
import { useRouter } from 'next/navigation';

// Modules & Components & OthersHooks
import Auth from '@/modules/Auth/Auth';

const auth = new Auth();

interface LoginType {
  username: string;
  password: string;
}
interface NewDataType {
  email: string;
  password: string;
}
let newData: NewDataType = {} as NewDataType;

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

export const useLogin = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      console.log(data, 'login Data');
      const userObject = {
        pk: data.data.user.pk,
        token: data.data.access,
        refresh: data.data.refresh,
      };
      auth.setUserAuth(userObject);
      route.push('/');
    },

    onError: (error) => {
      console.log('Login Error', error);
    },
  });
};
