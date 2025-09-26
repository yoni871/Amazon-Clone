import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
    //check if user info is already saved in local storage from previous login
    //if so parse and load it to redux state
}

const authSlice = createSlice({
    name: 'auth', //identifies this part of the redux store
    initialState, //sets the starting default
    reducers: { //reducers change the state based on actions
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
