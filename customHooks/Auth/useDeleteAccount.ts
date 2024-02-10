'use client';
import { useMutation } from '@tanstack/react-query';
import nonAuthRequest from '@/api/nonAuthRequest';
import { useRouter } from 'next/navigation';
import { useLogout } from './useLogout';
import Auth from '@/modules/Auth/Auth';

const auth = new Auth();
const id = auth.getUserId();

const deleteAccount = async () => {
  const response = await nonAuthRequest.delete(`/accounts/profile/${id}`);
  return response.data;
};

export const useDeleteAccount = () => {
  const route = useRouter();
  const logout = useLogout();
  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      route.push('/');
      logout();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
