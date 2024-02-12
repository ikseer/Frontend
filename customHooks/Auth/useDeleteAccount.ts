'use client';

// Main
import { useRouter } from 'next/navigation';


// API & React Query
import nonAuthRequest from '@/api/nonAuthRequest';
import { useMutation } from '@tanstack/react-query';


// Modules & Components & OthersHooks
import Auth from '@/modules/Auth/Auth';
import { useLogout } from './useLogout';


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
      console.log("Delete Account Error", error);
    },
  });
};