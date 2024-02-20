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
    removeUserInfo: () => void
}

const useAuthStore = create(persist<UseAuthType>((set, get) => ({
    userInfo: {id:"", accessToken:"", refreshToken:""},
    setUserInfo: (data: AuthDataType) => set({userInfo: data}),
    getUserInfo: () => get().userInfo,
    removeUserInfo: () => set({userInfo: {id:"", accessToken:"", refreshToken:""}})

}), {
    name:"auth-data"

}))

export default useAuthStore