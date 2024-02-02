import { useMutation } from "@tanstack/react-query"
import nonAuthRequest from "@/api/nonAuthRequest"
import Auth from "@/modules/Auth/Auth"
import {useRouter} from "next/navigation"
import { useRegisterContext } from '@/contexts/Register/RegisterContext';



// Register first step 
interface RegisterType {
    first_name: string;
    last_name: string;
    username: string;
    user_email: string;
    password: string;
    gender: string;
}

const register = async (data: RegisterType) => {
    const newData = {
        ...data,
        password1: data.password,
        password2: data.password,
        email: data.user_email
    }
    console.log(newData)
    const response = await nonAuthRequest.post('/accounts/register/', newData)
    return response
}

// let userObject  = {}

export const useRegister = () => {
    const {triggerFunction} = useRegisterContext()

    return useMutation({
        mutationFn: register,
        onMutate: (data) => {
            console.log("from mutate","data")
            
        },
        onSuccess: (data) => {
            // userObject = {...data}
            triggerFunction.current?.click()
        },
        onError: (error) => {
            console.log(error)
        },

    })
}

// Register second step 
interface PinNumberType {
    opt: string
}
const confirmEmail = async (data: PinNumberType) => {
    const response = await nonAuthRequest.post('/accounts/verify-email-otp/', data)
    return response
}

export const usePinCode = () => {
    const {triggerFunction} = useRegisterContext()
    return useMutation({
        mutationFn: confirmEmail,
        onMutate: (data) => {
            console.log(data)
        },
        onSuccess: () => {
            triggerFunction.current?.click()
        },
        onError: (error) => {
            console.log(error)
        }
    })
}





// Register third step

interface PhoneNumberType {
    phone: string | undefined
}

const sendPhoneNumber = async (data: PhoneNumberType) => {
    const response = await nonAuthRequest.post('/accounts/phone/', data)
    return response
}


export const usePhoneNumber = ()    => {
    const route = useRouter()
    return useMutation({
        mutationFn: sendPhoneNumber,
        onSuccess: () => {
            route.push("/login")
        },
        onError: (error) => {
            console.log(error)
        },
    })
}