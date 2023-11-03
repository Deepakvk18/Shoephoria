import { axiosApi } from "./axios"


export const signUpEmailMutation = ( credentials: { email: string, password: string, re_password: string } ) => {
    return axiosApi.post("/auth/users/", credentials)
}

export const signInEmailMutation = ( credentials: { email: string, password: string } ) => {
    return axiosApi.post("/auth/jwt/create/", credentials)
}