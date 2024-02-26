'use client';

// Main
import { useMutation } from '@tanstack/react-query';

// API & React Query
import nonAuthRequest from '@/api/nonAuthRequest';
import { useRouter } from 'next/navigation';

// Modules & Components & OthersHooks
import useAuthStore from '@/store/auth/useAuth';



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
  const { setUserInfo } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data, 'login Data');
      const userObject = {
        id: data.data.user.pk,
        accessToken: data.data.access,
        refreshToken: data.data.refresh,
      };
      setUserInfo(userObject);
      route.push('/');
    },

    onError: (error) => {
      console.log('Login Error', error);
    },
  });
};
