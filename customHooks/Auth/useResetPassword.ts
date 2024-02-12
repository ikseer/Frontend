'use client';

// Main
import { useRouter } from '@/navigation';

// API & React Query
import { useMutation } from '@tanstack/react-query';
import nonAuthRequest from '@/api/nonAuthRequest';


// Interface
interface ResetPasswordType {
  email: string;
}


const resetPassword = async (data: ResetPasswordType) => {
  const response = await nonAuthRequest.post('/accounts/password/reset/', data);
  return response;
};


export const useResetPassword = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      route.push('/forgot-password');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};