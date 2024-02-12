import { useMutation } from '@tanstack/react-query';
import nonAuthRequest from '@/api/nonAuthRequest';
import Auth from '@/modules/Auth/Auth';
import { useRouter } from 'next/navigation';
import { useRegisterContext } from '@/app/[locale]/(auth)/register/context/RegisterContext';
import authRequest from '@/api/authRequest';
// Register first step
interface RegisterType {
  first_name: string;
  last_name: string;
  username: string;
  user_email: string;
  password: string;
  gender: string;
}

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
interface User {
  pk: string;
  token: string;
  refresh: string;
}
let userObject: User = {
  pk: '',
  token: '',
  refresh: '',
};
interface PinNumberType {
  otp: string;
}
const confirmEmail = async (data: PinNumberType) => {
  const response = await nonAuthRequest.post(
    '/accounts/verify-email-otp/',
    data,
  );
  return response;
};

const auth = new Auth();
export const usePinCode = () => {
  const { triggerFunction } = useRegisterContext();
  return useMutation({
    mutationFn: confirmEmail,
    onSuccess: (data) => {
      triggerFunction.current?.click();
      userObject = {
        pk: data.data.pk,
        token: data.data.access,
        refresh: data.data.refresh,
      };
      auth.setUserAuth(userObject);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// Register third step
interface PhoneNumberType {
  phone: string | undefined;
}

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
