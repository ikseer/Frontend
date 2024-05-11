'use client';
import nonAuthRequest from '@/api/nonAuthRequest';
import useAuthStore from '@/store/auth/useAuth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface LoginType {
  username: string;
  password: string;
}

const login = async (data: LoginType) => {
  const response = await nonAuthRequest.post('/accounts/login/', data);
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
