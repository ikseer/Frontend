// Main
import { useRouter } from 'next/navigation';
import {http} from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '@/store/auth/useAuth';
import { useRegisterContext } from '@/app/[locale]/(auth)/register/context/RegisterContext';

const register = async (data: 
  {
  username: string,
  email:string,
  firstName: string,
  lastName: string,
  password: string,
  gender: string
}) => {
  const sendData = {
      username: data.username,
      email: data.email,
      password1: data.password,
      password2: data.password,
      first_name: data.firstName,
      last_name: data.lastName,
      gender: data.gender
  }
  const response = await http.post('/accounts/register/', sendData);
  return response;
};

export const useRegister = () => {
  const { triggerFunction } = useRegisterContext();

  return useMutation({
    mutationFn: register,

    onSuccess: () => {
      triggerFunction.current?.click();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};


let userObject = {
  id: '',
  accessToken: '',
  refreshToken: '',
};

const confirmEmail = async (data) => {
  const response = await http.post(
    '/accounts/verify-email-otp/',
    data,
  );
  return response;
};

export const usePinCode = () => {
  const { triggerFunction } = useRegisterContext();
  const { setUserInfo } = useAuthStore();
  return useMutation({
    mutationFn: confirmEmail,
    onSuccess: (data) => {
      triggerFunction.current?.click();
      userObject = {
        id: data.data.user.pk,
        accessToken: data.data.access,
        refreshToken: data.data.refresh,
      };
      setUserInfo(userObject);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};


const sendPhoneNumber = async (data) => {
  const response = await http.post('/accounts/phone-register/', data);
  return response;
};

export const usePhoneNumber = () => {
  const route = useRouter();
  return useMutation({
    mutationFn: sendPhoneNumber,
    onSuccess: () => {
      route.push('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
