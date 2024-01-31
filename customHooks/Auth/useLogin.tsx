import { useMutation } from "@tanstack/react-query"
// import axios from 'axios'
import nonAuthRequest from "@/api/nonAuthRequest"

interface LoginType {
    username: string
    password: string
}

const login = async (data: LoginType) => {
    const response = await nonAuthRequest.post('/accounts/login', data)
    return response
}

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
        onMutate: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        },
        onSettled: () => {
            console.log('done')
        }
    })
}