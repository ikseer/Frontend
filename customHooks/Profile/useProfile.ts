'use client';

// API & React Query
import { useQuery, useMutation } from '@tanstack/react-query';
import authRequest from '@/api/authRequest';

// Modules & Components & OthersHooks
import Auth from '@/modules/Auth/Auth';
// Interface
import { updateUserProfileType } from './useProfileTypesAndFunction';

// Get Method
const profileGetFunction = async () => {
  const auth = new Auth();
  const {id} = auth.getUserAuth();
  const response = await authRequest.get(`/accounts/profile/${id}/`);
  // console.log(response.data);
  console.log('enter profile get function');
  return response.data;
};

export const useGetProfile = (enabled:boolean) => {
  return useQuery({
    queryKey: ['profile-get'],
    queryFn: profileGetFunction,
    enabled:enabled?enabled: true
  });
};

// Update method
// Update all User Profile info except password & Image

const updateUserProfile = async (data: updateUserProfileType) => {
  const newObject = Object.fromEntries(
    Object.entries(data).filter(([key]) => key !== 'image'),
  );
  console.log(newObject, 'new Object');
  const auth = new Auth()
  const {id} = auth.getUserAuth();
  const request = await authRequest.patch(
    `/accounts/profile/${id}/`,
    newObject,
  );
  return request;
};

export const useUpdateProfile = () => {

  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      console.log('Profile Updated From useUpdateProfile');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// Delete method
