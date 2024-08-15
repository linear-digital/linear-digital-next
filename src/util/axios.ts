import axios from "axios";

const local = 'http://localhost:4000/api'
const server = 'https://ld.mdtamiz.com/api'
const api = axios.create({
    baseURL: server,
    headers: {
        'Content-Type': 'application/json',
    },
    auth: {
        username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || '',
        password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ''
    }
})

export default api

//https://ld.mdtamiz.com

// http://localhost:4000