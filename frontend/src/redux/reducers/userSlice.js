import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    loading : false,
    error : null,
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers :{
        getUserStart : (state) => {
            state.loading = true
        },
        getUserSuccess : (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        getUserFail : (state, action) => {
            state.error = action.payload
            state.loading = false
        },
    },
})

export const {
    getUserStart,
    getUserSuccess,
    getUserFail
} = userSlice.actions;

export default userSlice.reducer