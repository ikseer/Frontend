'use client';
interface UserInfoType {
  first_name: string;
  last_name: string;
  username: string;
}

class UserInfo {
  UserInfo: UserInfoType;
  constructor() {
    const info = localStorage.getItem('UserInfo');
    this.UserInfo = info ? JSON.parse(info) : {};
  }
  setUserInfo(data: UserInfoType) {
    this.UserInfo = data;
    localStorage.setItem('UserInfo', JSON.stringify(data));
  }
  getUserInfo() {
    return this.UserInfo || {};
  }
  logout() {
    this.UserInfo = { first_name: '', last_name: '', username: '' };
    localStorage.remove('UserInfo');
  }
}
export default UserInfo;
