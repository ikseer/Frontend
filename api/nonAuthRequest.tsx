import axios from 'axios'
// env didn't work properly with codespace, if run local uncoment next line and comment the next 2 line.
// const baseUrl = process.env.BASEURL
const baseUrl = "https://mohamedham.pythonanywhere.com"



const nonAuthRequest = axios.create({
    baseURL:baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default nonAuthRequest