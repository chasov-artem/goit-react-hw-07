import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const initialState = {
  filters: {
    name: "",
  },
};

const sliceFilter = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const selectFilters = (state) => state.filters.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const { changeSearch } = sliceFilter.actions;
export const filtersReducer = sliceFilter.reducer;
