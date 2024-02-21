'use client'

interface User {
  id: string;
  accessToken:string;
  refreshToken:string
}

class Auth {
  user: User;
  constructor() {
    let authData = localStorage.getItem('auth-data');
    const newAuthData = authData ? JSON.parse(authData) : {};
    this.user = newAuthData?.state?.userInfo
  }

  getUserAuth() {
    return this.user || {};
  }

  isRegister() {
    if (this.user && this.user?.accessToken && this.user?.refreshToken) {
      return true;
    }
    return false;
  }
  logout() {
    this.user = {
      id: '',
      accessToken: '',
      refreshToken: ''
    }
    localStorage.removeItem('auth-data');
  }
}
export default Auth;