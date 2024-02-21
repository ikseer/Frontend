'use client';

import { useRouter } from 'next/navigation';
import authRequest from '@/api/authRequest';
import { useMutation } from '@tanstack/react-query';
import Auth from '@/modules/Auth/Auth';

const deleteAccount = async () => {
  const auth = new Auth();
  const { id } = auth.getUserAuth();
  const response = await authRequest.delete(`/accounts/profile/${id}`);
  return response.data;
};

export const useDeleteAccount = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      route.push('/');
    },
    onError: (error) => {
      console.log('Delete Account Error', error);
    },
  });
};
