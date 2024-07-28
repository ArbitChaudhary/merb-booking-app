import axios from "axios";

const BASE_URL = "http://localhost:7000/api"

const token = localStorage.getItem('access_token')

export const authorized = axios.create({
    baseURL : BASE_URL,
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json",
        Accept : "application/json",
        Authorization : `Bearer ${token}`
    }
})