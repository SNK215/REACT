import { createSlice } from "@reduxjs/toolkit";

const flashcardSlice = createSlice({
    name: "flashcardSlice",
    initialState: {
        flashcards: [
            {
                id: 1,
                question: "Comment appelle-t-on le cinquième degrés d'une gamme majeure ?",
                response: "La dominante"
            },
            {
                id: 2,
                question: "Combien y a-t-il de dièses à l'armure (#) dans la gamme de La mineur (La m.) ?",
                response: "Aucun !"
            },
            {
                id: 3,
                question: "En général, comment se termine un morceau de musique classique joué au piano ?",
                response: "Avec un accord de la même tonalité que le morceau"
            },
            {
                id: 4,
                question: "Comment se compose une gamme majeure ?",
                response: "Une gamme majeure est composée suivant la structure ton / ton / demi-ton / ton / ton / ton / demi-ton"
            }
        ],
        isLoading: false,
        error: null
    },
    reducers: {
        setFlashcard(state, action) {
            state.flashcards = action.payload
        }
    }
})

export const { setFlashcards } = flashcardSlice.actions

export default flashcardSlice.reducer