import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      console.log(state.filter);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
