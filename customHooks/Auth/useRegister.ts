// Main
import { useRouter } from 'next/navigation';

// API & React Query
import authRequest from '@/api/authRequest';
import { useMutation } from '@tanstack/react-query';
import nonAuthRequest from '@/api/nonAuthRequest';

// Modules & Components & OthersHooks
// import Auth from '@/modules/Auth/Auth';
import useAuthStore from '@/store/auth/useAuth';
import { useRegisterContext } from '@/app/[locale]/(auth)/register/context/RegisterContext';

// Interface
import {
  RegisterType,
  PinNumberType,
  PhoneNumberType,
} from './useRegisterTypes';

// Register first step
const register = async (data: RegisterType) => {
  const newData = {
    ...data,
    password1: data.password,
    password2: data.password,
    email: data.user_email,
  };
  console.log(newData);
  const response = await nonAuthRequest.post('/accounts/register/', newData);
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

// Register second step
let userObject = {
  id: '',
  accessToken: '',
  refreshToken: '',
};

const confirmEmail = async (data: PinNumberType) => {
  const response = await nonAuthRequest.post(
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

// Register third step
const sendPhoneNumber = async (data: PhoneNumberType) => {
  const response = await authRequest.post('/accounts/phone-register/', data);
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
