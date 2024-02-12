'use client';

// API & React Query
import { useQuery, useMutation } from '@tanstack/react-query';
import authRequest from '@/api/authRequest';
// import nonAuthRequest from '@/api/nonAuthRequest';

// Modules & Components & OthersHooks
import Auth from '@/modules/Auth/Auth';

// Interface
import {
  updateUserProfileType,
  handleUpdateDate,
} from './useProfileTypesAndFunction';

// Get Method
const auth = new Auth();

const profileGetFunction = async () => {
  auth.prepareUserAuth();
  const id = auth.getUserId();
  const response = await authRequest.get(`/accounts/profile/${id}/`);
  return response.data;
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile-get'],
    queryFn: profileGetFunction,
  });
};

// Update method
// Update all User Profile info except password & Image

const updateUserProfile = async (data: updateUserProfileType) => {
  const newObject = handleUpdateDate(data);
  const id = auth.getUserId();
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
