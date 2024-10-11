import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContacts,
} from "./contactsOps";

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.contacts.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.contacts.isError = action.payload;
      state.contacts.isLoading = false;
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      });
  },
});

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectIsLoading = (state) => state.contacts.contacts.isLoading;
export const selectIsError = (state) => state.contacts.contacts.isError;

export const contactsReducer = slice.reducer;
export const {
  deleteContact,
  addContact,
  fetchDataSuccess,
  setIsLoading,
  setIsError,
} = slice.actions;
