import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    loading : false,
    error : null
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        signInStart : (state) => {
            state.loading = true
        },
        signInSuccess : (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        signInFail: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        signUpStart : (state) => {
            state.loading = true
        },
        signUpSuccess : (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        signUpFail: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
    },
})

export const {
    signInStart,
    signInSuccess,
    signInFail,
    signUpStart,
    signUpSuccess,
    signUpFail
} = authSlice.actions;

export default authSlice.reducer