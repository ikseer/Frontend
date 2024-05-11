import { useMutation } from '@tanstack/react-query';
import Auth from '@/modules/Auth/Auth';
import axios from 'axios';

const updateImage = async (data: Blob) => {
  const auth = new Auth();
  const { id, accessToken } = auth.getUserAuth();
  const formData = new FormData();
  formData.append('image', data);
  console.log('iamge uploaded');
  const request = await axios.patch(
    `https://ikseer.azurewebsites.net/accounts/profile/${id}/`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return request;
};

export const useUpdateProfileImage = () => {
  return useMutation({
    mutationFn: updateImage,
    onSuccess(data) {
      console.log(data, 'success');
    },
    onError(data) {
      console.log(data, 'error');
    },
  });
};

// Delete Method
const deleteImage = async () => {
  const auth = new Auth();
  const { id, accessToken } = auth.getUserAuth();
  const request = await axios.delete(
    `https://ikseer.azurewebsites.net/accounts/profile/${id}/`,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  return request;
};
export const useDeleteProfileImage = () => {
  useMutation({
    mutationFn: deleteImage,
  });
};
