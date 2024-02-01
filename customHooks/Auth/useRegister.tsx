import { useMutation } from "@tanstack/react-query"
// import axios from 'axios'
import nonAuthRequest from "@/api/nonAuthRequest"

interface RegisterType {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    gender: string;
}
// we can send extra field to backend so we will send password & pasword1 & password2 
// instead send passwod1 & password2 only.

// let newData = {
//     first_name: '',
//     last_name: '',
//     username: '',
//     email: '',
//     password1: '',
//     password2: '',
//     gender: ''
// }

// function handleDataSend(data: RegisterType) {
//     for (const [key, value] of Object.entries(data)) {
//         if (key === "password") {
//             console.log("Enter Hereo")
//           newData.password1 = value;
//           newData.password2 = value;
//         } else {
//         // @ts-ignore
//           newData[key] = value;
//         }
//       }
// }

const register = async (data: RegisterType) => {
    // handleDataSend(data)
    const newData = {
        ...data,
        password1: data.password,
        password2: data.password
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