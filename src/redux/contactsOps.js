import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6708fccfaf1a3998ba9fef23.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkApi) => {
    try {
      const { data } = await axios.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const changeFiltersThunk = createAsyncThunk("changeFilter", async (body, thunkApi) => {
//     const {data} = await axios
// })

// export const fetchContacts = () => async (dispatch) => {
//   try {
//     dispatch(setIsLoading(true));
//     const { data } = await axios.get("/contacts");
//     dispatch(setIsLoading(false));
//     dispatch(fetchDataSuccess(data));
//   } catch {
//     dispatch(setIsError(true));
//   }
// };

// export const deleteContactThunk = (id) => async (dispatch) => {
//   const { data } = await axios.delete(`/contacts/${id}`);
//   dispatch(deleteContact(data.id));
// };

// export const addContactThunk = (body) => async (dispatch) => {
//   const { data } = await axios.post(`/contacts`, body);
//   dispatch(addContact(data));
// };
