'use client';

// API & React Query
import { useQuery } from '@tanstack/react-query';
import authRequest from '@/api/authRequest';



// Modules & Components & OthersHooks
import Auth from '@/modules/Auth/Auth';


// Get Method
const auth = new Auth();


const profileGetFunction = async () => {
  auth.prepareUserAuth();
  const id = auth.getUserId();
  const response = await authRequest.get(`/accounts/profile/${id}`);
  return response.data;
};


export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile-get'],
    queryFn: profileGetFunction,
  });
};





// Update method

// Delete method
