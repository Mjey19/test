import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slice/filterSlice";

export default configureStore({
  reducer: { filter: filterSlice },
});
