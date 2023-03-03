import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {
        isDisplayed: false,
        error: null
    },
    reducers: {
        setIsDisplayed(state, action) {
            state.isDisplayed = action.payload
        }
    }
})

export const { setIsDisplayed } = modalSlice.actions
export default modalSlice.reducer