import {create} from 'zustand'

interface UserInfoType {
    firstName: string
    lastName: string
    image:string
}
interface ProfileType {
    userInfo: UserInfoType,
    // eslint-disable-next-line no-unused-vars
    setUserInfo: (data: UserInfoType) => void
}   

const storeProfile = create<ProfileType>((set) => ({
    userInfo: {firstName: "", lastName: "", image:""},
    setUserInfo: (data: UserInfoType) => set({userInfo: data})
}))
export default storeProfile