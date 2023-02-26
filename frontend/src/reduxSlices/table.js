import { createSlice } from "@reduxjs/toolkit";
import * as action from "../reduxConstants/constants";
const initialState = {
  name: "Planned Production Count",
  data: {
    A: "",
    B: "",
    C: "",
  },
  fieldValues: [],
  shift: "A",
};

export const table = createSlice({
  name: action.TABLE,
  initialState,
  reducers: {
    setTodaysData: (state, actions) => {
      if (actions.payload.shift === "A") {
        state.data.A = actions.payload.shiftData;
      } else if (actions.payload.shift === "B") {
        state.data.B = actions.payload.shiftData;
      } else if (actions.payload.shift === "C") {
        state.data.C = actions.payload.shiftData;
      }
    },
    setShift: (state, actions) => {
      if (actions.payload === "Shift 1") {
        state.shift = "A";
      } else if (actions.payload === "Shift 2") {
        state.shift = "B";
      } else {
        state.shift = "C";
      }
    },
    setProductionCount: (state, actions) => {
      state.fieldValues = actions.payload;
    },
  },
});

export const { setTodaysData, setShift, setProductionCount } = table.actions;

export default table.reducer;
