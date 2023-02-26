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

// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import React,{ useState,useCallback } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import PlannedProductionTable from "./plannedProductionTable";
import FilterBasic from "../ev-dashboard/FilterBasic";
import MDAlert from "components/MDAlert";
import { useSelector, useDispatch } from "react-redux";

function PlannedProduction() {
  const store = useSelector((store)=>{
    return store.alert;
})

// console.log(store);
  
  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
      {store.showAlert ? 
        <div style={{zIndex:"2000",position:"fixed",width:"60%"}}>
            <MDAlert color={store.color} dismissible={true}>
              <h5>{store.message}</h5>
            </MDAlert>
           </div>
            :""
       }
        <DashboardNavbar absolute />
      </MDBox>
      <MDBox py={3} mt={7}>
      <Box sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12} mb={1}>
              <FilterBasic />
            </Grid>
            <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
                    {/* <Header func1={pull_data1}/> */}
                    <PlannedProductionTable  />
                  </CardContent>
                </Card>          
            </Grid>
          </Box>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PlannedProduction;
