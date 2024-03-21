'use client';

interface User {
  id: string;
  accessToken: string;
  refreshToken: string;
}

class Auth {
  user: User;

  constructor() {
    const authData = localStorage.getItem('auth-data');
    const newAuthData = authData ? JSON.parse(authData) : {};
    this.user = newAuthData?.state?.userInfo;
  }

  getUserAuth() {
    return this.user || {};
  }

  isRegister() {
    return Boolean(this.user?.accessToken && this.user?.refreshToken);
  }

  logout() {
    this.user = {
      id: '',
      accessToken: '',
      refreshToken: '',
    };
    localStorage.removeItem('auth-data');
  }
}
export default Auth;
