'use client';

interface User {
  pk: string;
  token: string;
  refresh: string;
}

class Auth {
  user: User;
  constructor() {
    const authData = localStorage.getItem('auth');
    this.user = authData ? JSON.parse(authData) : {};
  }
  getUserAuth() {
    return this.user || {};
  }
  getUserId() {
    return this.user?.pk || null;
  }
  getToken() {
    return this.user.token || null;
  }
  getRefresh() {
    return this.user.refresh || null;
  }

  setUserAuth(newUser: User) {
    this.user = newUser;
    localStorage.setItem('auth', JSON.stringify(newUser));
  }
  isRegister() {
    if (this.user && this.user?.token && this.user?.pk) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('auth');
    this.user = {} as User;
  }
}
export default Auth;
