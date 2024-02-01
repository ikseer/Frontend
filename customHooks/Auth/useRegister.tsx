import { useMutation } from "@tanstack/react-query"
// import axios from 'axios'
import nonAuthRequest from "@/api/nonAuthRequest"

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
const confirmEmail = async (data: RegisterType) => {
    const response = await nonAuthRequest.post('/accounts/otp-by-email/', data)
    return response
}
const sendPhoneNumber = async (data: RegisterType) => {
    const response = await nonAuthRequest.post('/accounts/phone/', data)
    return response
}


export const useRegister = () => {
    return useMutation({
        mutationFn: register,
        onMutate: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
        onSettled: () => {
            console.log('Done from settled')
        }
    })
}


export const usePinCode = () => {
    return useMutation({
        mutationFn: confirmEmail,
        onMutate: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
        onSettled: () => {
            console.log('Done from settled')
        }
    })
}


export const usePhoneNumber = ()    => {
    return useMutation({
        mutationFn: sendPhoneNumber,
        onMutate: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
        onSettled: () => {
            console.log('Done from settled')
        }
    })
}