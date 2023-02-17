import { configureStore } from "@reduxjs/toolkit";
import table from "reduxSlices/table";
export const store = configureStore({
  reducer: {
    table: table,
  },
});