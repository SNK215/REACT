import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        signFormMode : "Sign In",
        isLogged : false,
        isLoading: false,
        error: null
    },
    reducers: {
        setSignIn(state) {
        state.signFormMode = "Sign In"
        },
        setSignUp(state) {
            state.signFormMode = "Sign Up"
        },
        setIsLogged(state, action) {
            state.isLogged = action.payload 
        }
    }
})

export const { setAuthAction, setSignIn, setSignUp, setIsLogged } = authSlice.actions

export default authSlice.reducer