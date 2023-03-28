import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTableDataChanged:false,
  pp_data:[],
};

export const physicalPhenomena = createSlice({
  name: "PhysicalPhenomena",
  initialState,
 reducers:{
    setIsTableDataChanged: (state,actions)=>{
        state.isTableDataChanged = actions.payload;
    },
    setPPData: (state,actions) => {
      state.pp_data = [...initialState.pp_data,actions.payload]
      // initialState.pp_data.splice(0, 1)
    }
 }
});

export const { setIsTableDataChanged,setPPData } = physicalPhenomena.actions;

export default physicalPhenomena.reducer;
