import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState: {
        recipes: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setRecipes(state, action) {
            state.recipes = action.payload
        }
    }
})

export const { setRecipes } = recipeSlice.actions
export default recipeSlice.reducer