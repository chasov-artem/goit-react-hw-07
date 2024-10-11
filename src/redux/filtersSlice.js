import { createSlice } from "@reduxjs/toolkit";

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

export const filtersReducer = sliceFilter.reducer;
export const { changeSearch } = sliceFilter.actions;
