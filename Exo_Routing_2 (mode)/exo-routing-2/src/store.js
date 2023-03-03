import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./routes/Contacts/contactSlice";

const store = configureStore({
    reducer : {
        contactSlice: contactSlice
    }
})

export default store