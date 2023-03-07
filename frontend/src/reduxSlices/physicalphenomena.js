import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTableDataChanged:false,
};

export const physicalPhenomena = createSlice({
  name: "PhysicalPhenomena",
  initialState,
 reducers:{
    setIsTableDataChanged: (state,actions)=>{
        state.isTableDataChanged = actions.payload;
    }
 }
});

export const { setIsTableDataChanged } = physicalPhenomena.actions;

export default physicalPhenomena.reducer;
