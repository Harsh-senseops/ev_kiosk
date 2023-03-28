import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 roles:Number(localStorage.getItem("userRole")),
 machineToShow:JSON.parse(localStorage.getItem("machineID"))
};

export const userRoles = createSlice({
  name: "USER_ROLES",
  initialState,
  reducers: {
    setRoles: (state, actions) => {
      state.roles = actions.payload
    },
    setMachines:(state,actions) =>{
      state.machineToShow = actions.payload
    }
  },
});

export const { setRoles,setMachines } = userRoles.actions;

export default userRoles.reducer;