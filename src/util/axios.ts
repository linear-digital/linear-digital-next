import axios from "axios";

const local = 'http://localhost:4000/api'
const server = 'https://ld.mdtamiz.com/api'
const api = axios.create({
    baseURL: server,
})

export default api

//https://ld.mdtamiz.com

// http://localhost:4000