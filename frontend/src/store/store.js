import { configureStore } from "@reduxjs/toolkit";
import table from "reduxSlices/table";
import alert from "reduxSlices/alert";
import physicalphenomena from "reduxSlices/physicalphenomena";
import userRoles from "reduxSlices/userRoles";
export const store = configureStore({
  reducer: {
    table: table,
    alert:alert,
    physicalphenomena:physicalphenomena,
    userRoles:userRoles
  },
});