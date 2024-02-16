// Main
import { StaticImageData } from 'next/image';


// API & React Query
import { useQuery, useMutation } from '@tanstack/react-query';
import authRequest from '@/api/authRequest';



// Get Method
const getImage = async () => {
  const response = await authRequest.get('/accounts/profile/image');
  return response.data;
};


export const useGetProfileImage = () => {
  return useQuery({
    queryKey: ['get-profile-image'],
    queryFn: getImage,
  });
};





// Update Image
const updateImage = async (data: StaticImageData) => {
  const request = await authRequest.patch('/accounts/profile/image', data);
  return request;
};


export const useUpdateProfileImage = () => {
  useMutation({
    mutationFn: updateImage,
  });
};





// Delete Method
const deleteImage = async () => {
  const request = await authRequest.delete('/accounts/profile/image');
  return request;
};
export const useDeleteProfileImage = () => {
  useMutation({
    mutationFn: deleteImage,
  });
};
