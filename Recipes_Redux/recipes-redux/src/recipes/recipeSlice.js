import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState: {
        recipes: [],
        isLoading: false,
        error: null,
        ingredients: [
            {id:1, name: "Sucre"},
            {id:2, name: "Lait"},
            {id:3, name: "Farine"},
            {id:4, name: "Oeufs"},
            {id:5, name: "Eau"}
        ] 
    },
    reducers: {
        setRecipes(state, action) {
            state.recipes = action.payload
        }
    }
})

export const { setRecipes } = recipeSlice.actions
export default recipeSlice.reducer