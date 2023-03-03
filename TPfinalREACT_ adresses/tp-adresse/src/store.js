import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/auth/authSlice";

const store = configureStore({
    reducer : {
        authSlice: authSlice
    }
})

export default store