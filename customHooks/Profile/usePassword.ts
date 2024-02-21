import authRequest from '@/api/authRequest';
import { useMutation } from '@tanstack/react-query';
import Auth from '@/modules/Auth/Auth';

interface PasswordType {
  old_password: string;
  new_password1: string;
  new_password2: string;
}

const handleUpdatePassword = async (data: PasswordType) => {
  const auth = new Auth();
  const { id } = auth.getUserAuth();
  const response = await authRequest.patch(
    `/accounts/password/change/${id}/`,
    data,
  );
  return response;
};
export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: handleUpdatePassword,
    onSuccess(data) {
      console.log(data, 'success');
    },
    onError(data) {
      console.log(data, 'error');
    },
  });
};
