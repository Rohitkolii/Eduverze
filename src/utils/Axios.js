import axios from "axios"

export const AXIOS = axios.create({
    baseURL : "",
    headers:{Authorization: `Bearer ${localStorage.getItem("access_toekn")}`}
})

// AXIOS.interceptors.request.use((config)=> {
//     return config;
// }, (err)=> {
//     return 
// })

// AXIOS.interceptors.response.use((response)=> {
//     console.log()
// })