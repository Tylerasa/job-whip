import { configureStore } from "@reduxjs/toolkit";
import floaterReducer from "./floaterSlice";
export const store = configureStore({
  reducer: {
    floater: floaterReducer,
  },
});
