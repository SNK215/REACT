import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../firebase-config";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials) => {
    const response = await fetch(SIGN_IN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'authentification !")
    }

    const data = await response.json()

    return data
  }
)

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials) => {
    const response = await fetch(SIGN_UP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'authentification !")
    }

    const data = await response.json()

    return data
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    formMode: "Sign In",
    isLogged : false,
    isLoading: false,
    error: null
  },
  reducers: {
    setIsLogged(state, action) {
      state.isLogged = action.payload
    },
    setSignFormMode(state, action) {
      state.formMode = action.payload
      },
    removeUser(state) {
      state.user = null
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.user = null
      state.isLoading = true
      state.error = null
    })

    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      localStorage.setItem('token', action.payload.idToken)
    })

    builder.addCase(signUp.pending, (state) => {
      state.user = null
      state.isLoading = true
      state.error = null
    })

    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      localStorage.setItem('token', action.payload.idToken)
    })
  }
})

export const { setUser, removeUser, setSignFormMode, setIsLogged } = authSlice.actions

export default authSlice.reducer