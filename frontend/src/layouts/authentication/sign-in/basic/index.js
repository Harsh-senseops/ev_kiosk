/**
=========================================================
* Material Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useQuery } from "urql";
import { VALIDATE_USER } from "queries/allQueries";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import { useSelector, useDispatch } from "react-redux";
import * as action from "reduxSlices/userRoles";
// Images

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [items, setItems] = useState(true);
  const navigate = useNavigate();
  const [userResult, reExecUserRResult] = useQuery({
    query: VALIDATE_USER,
    variables: {userName},
    pause:userName ? false : true
  });
  const { data, fetching, error } = userResult;
  const dispatch = useDispatch();

  const showError = () => {
    if(error){
      return (
        <h1>error</h1>
      )
    }
  }

  useEffect(() => {
    if (data) {
      if (data.validateUser[0]) {
        console.log(data.validateUser);
        if (
          data.validateUser[0].user_name === userName &&
          data.validateUser[0].user_password === password
        ) {
          // alert("True");
          let machinesIds = []
          data.validateUser.map((val)=>{
            machinesIds.push(val.user_machine_id)
          })
          navigate("/dashboards/analytics")
          localStorage.setItem('isLoggedIn', JSON.stringify(items));
          localStorage.setItem("machineID",JSON.stringify(machinesIds))
          dispatch(action.setRoles(data.validateUser[0].user_roles_role))
          dispatch(action.setMachines(machinesIds))
          localStorage.setItem("userRole",JSON.stringify(data.validateUser[0].user_roles_role))
        }else{
          if(userName){
            setErrorMsg("User credentials incorrect")
          }
        
        }
      }
      else{
        if(userName){
          //if problem in server do whatever you want here
          // setErrorMsg("User credentials incorrect")
        }
        
      }
    }
  }, [userResult]);
console.log(userResult)
  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleEmail = (e) => {
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target.userName.value);
    setPassword(e.target.password.value);
    reExecUserRResult();
    // localStorage.setItem('isLoggedIn', JSON.stringify(items));
    // navigate("/dashboards/analytics");
  };
  localStorage.clear()

  return (
    <BasicLayout>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Login
          </MDTypography>
        </MDBox>
        {showError()}
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={(e) => handleSubmit(e)}>
            <MDBox mb={2}>
              <MDInput type="text" label="User name" fullWidth name="userName" />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" name="password" fullWidth />
              {errorMsg ? <span style={{fontSize:"13px",marginLeft:"10px",color:"red"}}>{errorMsg}</span>:""}
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                Login
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                <MDTypography
                  // component={Link}
                  // to="/authentication/sign-up/cover"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Forgot password
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
