import {createSlice} from '@reduxjs/toolkit';
import {loginUser, logoutUser, registerUser, refreshUser} from '../redux/operations';

const initialState = {
  isLogged: false,
  email: '',
  name: '',
  isLoading: false,
  error:null,}

  const userSlice = createSlice({
    name:'auth',
    initialState:initialState,
    extraReducers:builder=> {
        builder
        .addCase(loginUser.pending, state => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.isLogged = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(refreshUser.pending, state => {
            state.isLoading = true;
          })
          .addCase(refreshUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.isLogged = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
          })
          .addCase(refreshUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(logoutUser.pending, state => {
            state.isLoading = true;
          })
          .addCase(logoutUser.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
            state.isLogged = false;
            state.name = null;
            state.email = null;
          })
          .addCase(logoutUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
          .addCase(registerUser.pending, state => {
            state.isLoading = true;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.isLogged = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
      },
    });
    
    export const authReducer = userSlice.reducer;