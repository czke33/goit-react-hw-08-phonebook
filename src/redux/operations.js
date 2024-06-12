import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

const client=axios.create({
    baseURL:'https://connections-api.herokuapp.com'
});

client.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization= `Bearer ${token}`;
    return config;
}
);

export const loginUser = createAsyncThunk('users/login', 
async ({email, password}, thunkAPI) => {
    try {
        const response = await client.post('/users/login', {email, password});
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        alert(error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const refreshUser=createAsyncThunk('users/refresh',
async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    if (token){
    try {
        const response = await client.get('/users/current');
        return response.data;
    } catch (error) {
        alert(error.message)
        return thunkAPI.rejectWithValue(error.message);
    }
}else{
    return thunkAPI.rejectWithValue(null);}
})


export const logoutUser=createAsyncThunk('users/logout',
async (_, thunkAPI) => {
    try {
         await client.post(`/users/logout`);
        localStorage.clear();

    } catch (error) {
        alert(error.message);
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const registerUser=createAsyncThunk('users/register',
async ({name, email, password}, thunkAPI) => {
    try {
        const response = await client.post('/users/signup', {name, email, password});
        localStorage.setItems('token', response.data.token);
        return response.data;
    } catch (error) {
        alert(error.message);
        return thunkAPI.rejectWithValue(error.message);
    }});
    
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await client.get('/contacts');
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
      try {
        const response = await client.post('/contacts', {
          name,
          number,
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    },
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async ({ contactId }, thunkAPI) => {
      try {
        const response = await client.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    },
  );