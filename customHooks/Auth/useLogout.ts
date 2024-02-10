'use client';

import Auth from '@/modules/Auth/Auth';
import UserInfo from '@/modules/Auth/UserInfo';

const auth = new Auth();
const userInfo = new UserInfo();

export const useLogout = () => {
  return () => {
    auth.logout();
    userInfo.logout();
  };
};
