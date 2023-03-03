import { configureStore } from "@reduxjs/toolkit";
import flashcardSlice from "./routes/flashcard/flashcardSlice";

const store = configureStore({
    reducer : {
        flashcardSlice : flashcardSlice
    }
})

export default store