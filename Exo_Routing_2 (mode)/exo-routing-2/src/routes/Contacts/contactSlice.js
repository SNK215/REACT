import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contactSlice",
    initialState: {
        contacts: [
            {
                id: 33154124,
                nom: "Langowski",
                prenom: "Lucas",
                email: "mail@mail.fr",
                telephone: "0123456789" 
            },
            {
                id: 2245121684,
                nom: "Dupond",
                prenom: "Jean",
                email: "mail@mail.fr",
                telephone: "0123456789" 
            }
        ],
        isLoading: false,
        error: null, 
    },
    reducers: {
        setContacts(state, action) {
            state.contacts = action.payload
        }
    }
})

export const { setContacts } = contactSlice.actions
export default contactSlice.reducer