import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

function decodeToken() {
  if(localStorage.getItem("TOKEN_KEY")){
  const decoded = jwt_decode(localStorage.getItem("TOKEN_KEY"));
  let machinesIds = []
  decoded.machineId?.map((val)=>{
    machinesIds.push(val)
  })
  return{
    machines:machinesIds,role:decoded.userRole
  }
}
return{
  machines:"",role:""
}
}

const initialState = {
 roles:Number(decodeToken().role),
 machineToShow:decodeToken().machines
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