import axios from "axios"
import { BACKEND } from "@/lib/helper/links"

export const axiosApi = axios.create({
    baseURL: BACKEND,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

// axiosApi.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem("token")
//         if (token) {
//             config.headers["Authorization"] = `Bearer ${token}`
//         }
//         config.headers["Content-Type"] = "application/json"
//         return config
//     },
//     error => {
//         Promise.reject(error)
//     }
// )

// // Reauth using axios interceptors
// axiosApi.interceptors.response.use(
//     response => response,
//     async error => {
//         const originalRequest = error.config
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true
//             const refresh = localStorage.getItem("refreshToken")
//             const res = await axiosApi.post("auth/jwt/refresh", { refresh })
//             if (res.status === 200) {
//                 localStorage.setItem("token", res.data.access)
//                 localStorage.setItem("refreshToken", res.data.refresh)
//                 return axiosApi(originalRequest)
//             }
//         }
//         return Promise.reject(error)
//     }
// )