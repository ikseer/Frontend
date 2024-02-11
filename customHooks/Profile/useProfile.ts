'use client';
import { useQuery } from '@tanstack/react-query';
import authRequest from '@/api/authRequest';
import Auth from '@/modules/Auth/Auth';
// Get

const auth = new Auth();
const id = auth.getUserId();

const profileGetFunction = async () => {
  const response = await authRequest.get(`/accounts/profile/${id}`);
  return response.data;
};

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile-get'],
    queryFn: profileGetFunction,
  });
};

// update

// delete
