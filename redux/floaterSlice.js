import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const floaterSlice = createSlice({
  name: "floater",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = floaterSlice.actions;

export default floaterSlice.reducer;
