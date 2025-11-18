import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isloggedin: "",
        loading: false
    },

    reducers: {
        login: (state, action)=> {
            localStorage.setItem("access_toekn", action.payload.data.token)
            localStorage.setItem("user", action.payload.data.id)
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer

export const loginAuth = (data)=> {
    return async function loginAuthThunk(dispatch, getState){
        try {
            const response = await fetch("http://localhost:3001/api/auth/login",{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
            const res = await response.json()
            // console.log(res);

            if(response.ok){
                dispatch(login(res))
            }           

        } catch (error) {
            console.log(error);
        }
    }
}

export const RegisterUser = (data)=> {
    return async function RegisterUserThunk(dispatch, getState){
        try {
            const response = await fetch("http://localhost:3001/api/auth/register",{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
            const res = await response.json()
            console.log(response);

            if(response.ok){
                // dispatch(login(res))
                alert(res.message)
                location.href = "/"
            }else{
                alert(res.message)
            }

        } catch (error) {
            console.log(error);
        }
    }
}


export const Userlist = (data)=> {
    return async function UserlistThunk(dispatch, getState){
        try {
            const response = await fetch("http://localhost:3001/api/auth/userlist")
            const res = await response.json()
            console.log(res);

            if(response.ok){
                return res
            }else{
                alert(res.message)
            }

        } catch (error) {
            console.log(error);
        }
    }
}