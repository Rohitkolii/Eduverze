import * as yup from "yup"

export const authSchema = yup.object({
    // name: yup.string().min(3).max(25).required("Please enter your name"),
    email: yup.string().email("Please enter valid email").required("Please enter your email"),
    password: yup.string().required("Please enter a Strong Password")
})