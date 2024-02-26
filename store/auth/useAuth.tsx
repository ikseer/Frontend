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
    // getUserInfo: () => AuthDataType
    logout: () => void
}

const useAuthStore = create(persist<UseAuthType>((set) => ({
    userInfo: {id:"", accessToken:"", refreshToken:""},
    setUserInfo: (data: AuthDataType) => set({userInfo: data}),
    logout: () => {
        set({userInfo: {id:"", accessToken:"", refreshToken:""}})
    }

}), {
    name:"auth-data",
    serialize: (state) => JSON.stringify(state),
    deserialize: (serializedState) => JSON.parse(serializedState),
}))

export default useAuthStore