import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64a1a1180079ce56e2db45c3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/contacts');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
    'contact/addContact',
    async (contact, thunkAPI) => {
        try {
           const {data} = await axios.post('/contacts', contact) 
           return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);   
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (id, thunkAPI) => {
        try {
         const {data} = await axios.delete(`/contacts/${id}`)  
         return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)