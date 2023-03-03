import { createSlice } from "@reduxjs/toolkit";

const modalRecipeSlice = createSlice({
    name: "modalRecipe",
    initialState: {
        isDisplayed: false,
        error: null
    },
    reducers: {
        setModalRecipeDisplayed(state, action) {
            state.isDisplayed = action.payload
        }
    }
})

export const { setModalRecipeDisplayed } = modalRecipeSlice.actions
export default modalRecipeSlice.reducer