'use client';
import { useQuery } from '@tanstack/react-query';
import authRequest from '@/api/authRequest';

// Get

const profileGetFunction = async () => {
  const response = await authRequest.get('/accounts/profile/');
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
