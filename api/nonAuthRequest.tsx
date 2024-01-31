import axios from 'axios'
const baseUrl = process.env.BASEURL
console.log("yousef",process.env, process.env.BASEURL)


const nonAuthRequest = axios.create({
    baseURL:baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default nonAuthRequest