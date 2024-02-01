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
let newData = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password1: '',
    password2: '',
    gender: ''
}

function handleDataSend(data: RegisterType) {
    for (const [key, value] of Object.entries(data)) {
        if (key === "password") {
            console.log("Enter Hereo")
          newData.password1 = value;
          newData.password2 = value;
        } else {
        // @ts-ignore
          newData[key] = value;
        }
      }
}
const register = async (data: RegisterType) => {
    handleDataSend(data)
    console.log(newData)
    const response = await nonAuthRequest.post('/accounts/register', newData)
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