import axios from 'axios'
const baseUrl = process.env.BASEURL

interface ConfigType {
    'Content-Type': string
}
const nonAuthRequest = axios.create({
    baseURL:baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default nonAuthRequest