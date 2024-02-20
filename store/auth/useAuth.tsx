// 'use client'

import {create} from 'zustand'
import { persist } from 'zustand/middleware';
interface AuthDataType  {
    id: string;
    accessToken:string;
    refreshToken:string
}
interface UseAuthType {
    userInfo: AuthDataType
    // eslint-disable-next-line no-unused-vars
    setUserInfo: (data: AuthDataType) => void
    getUserInfo: () => AuthDataType
    logout: () => string
}

const useAuthStore = create(persist<UseAuthType>((set, get) => ({
    userInfo: {id:"", accessToken:"", refreshToken:""},
    setUserInfo: (data: AuthDataType) => set({userInfo: data}),
    getUserInfo: () => get().userInfo,
    logout: () => {
        let id = get().userInfo.id
        while(id) {
            localStorage.removeItem('auth-data');
            set({userInfo: {id:"", accessToken:"", refreshToken:""}})
            id = get().userInfo.id
        }
        return id
    }

}), {
    name:"auth-data"

}))

export default useAuthStore