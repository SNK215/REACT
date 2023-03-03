import { configureStore } from "@reduxjs/toolkit";
import  modalSlice  from "./shared/modalSlice"
import authSlice from "./auth/authSlice";
import recipeSlice from "./recipes/recipeSlice";
import modalRecipeSlice from "./recipes/modalRecipeSlice";

const store = configureStore({
    reducer : {
        modal : modalSlice,
        auth : authSlice,
        recipe : recipeSlice,
        modalRecipeSlice : modalRecipeSlice
    }
})

export default store