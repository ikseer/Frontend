import { useMutation } from "@tanstack/react-query"
// import axios from 'axios'
import nonAuthRequest from "@/api/nonAuthRequest"

interface LoginType {
    username: string
    password: string
}
interface NewDataType {
    email: string
    password: string
}
let newData:NewDataType = {
    email: '',
    password: '',
}
const handleSendData = (data: LoginType) => {
    for (const [key, value] of Object.entries(data)) {
        if (key === "username") {
          newData.email = value;
        } else {
        // @ts-ignore
          newData[key] = value;
        }
      }
}


const login = async (data: LoginType) => {
    handleSendData(data)
    // console.log(newData)
    const response = await nonAuthRequest.post('/accounts/login', newData)
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