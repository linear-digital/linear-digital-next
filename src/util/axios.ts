import axios from "axios";

const local = 'http://localhost:4000/api'
const server = 'https://server.lineardigital.co/api'
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

//https://server.lineardigital.co

// http://localhost:4000