import { createSlice, configureStore } from '@reduxjs/toolkit';
import * as action from "../reduxConstants/constants"
const initialState = {
    name:"Planned Production Count",
    data:[],
    tableData:{
      buttonState:true,
      shift:"Shift 1",
      productionCount:[{}],
      alert:false
    }
  };

  export const table = createSlice({
    name: action.TABLE,
    initialState,
    reducers: {
      setTableName: (state, actions) => {
        state.name = actions.payload
      },
      setTodaysData: (state, actions) => {
        state.data = actions.payload
      },
      setShift:(state,actions) => {
        state.tableData.shift = actions.payload
      },
      setProductionCount:(state,actions)=>{
        state.tableData.productionCount = actions.payload;
      },
      setAlert:(state,actions)=>{
        state.tableData.alert = actions.payload;
      },
      setButton:(state,actions)=>{
        state.tableData.buttonState = actions.payload;
      }
    },
  });

export const { setTableName, setTodaysData, setShift, setProductionCount,setAlert,setButton } =
table.actions;

export default table.reducer;