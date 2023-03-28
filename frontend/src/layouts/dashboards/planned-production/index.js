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
import React,{ useState,useCallback } from "react";
import Card from '@mui/material/Card';
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
import { useMutation } from "urql";
import { POST_MUTATION,UPDATE_MUTATION } from "queries/allQueries";
import alertAndLoaders from "util/alertAndLoaders";
import * as actionsTable from "../../../reduxSlices/table";

function PlannedProduction() {
  const [createResult, createVals] = useMutation(POST_MUTATION);
  const [updateResult, upadateValue] = useMutation(UPDATE_MUTATION);

  const dispatch = useDispatch();

  const alertStore = useSelector((store)=>{
    return store.alert;
  })

  const store = useSelector((store) => {
  return store.table;
  });

 const executeQuery = () => {
    let counter = 0
    store.fieldValues.map(async(val, index) => {
      if (val.field === "N/A" || !val.field) {
       counter++;
        if(counter===4){
          await alertAndLoaders("Feilds cannot be empty","warning",dispatch)
        }
        return;
      } else if (val.dbId !== 0 && val.dbId !== "") {
        alertAndLoaders("SHOW_ALERT",dispatch);
        upadateValue({
          id: val.dbId,
          productionCount: Number(val.field),
        }).then((result)=>{
          if(result.error){
            console.log(result.error)
            alertAndLoaders("UNSHOW_ALERT",dispatch,"Error 404 Not Found", "error");
             return
          }
          alertAndLoaders("UNSHOW_ALERT",dispatch,"Updated SucessFully", "primary");
        })
        dispatch(actionsTable.setExecuteQuery(true))
      } else {
        alertAndLoaders("SHOW_ALERT",dispatch);
        createVals({
          zone: val.id,
          shift: store.shift,
          productionCount: Number(val.field),
        }).then((result)=>{
          if(result.error){
            console.log(result.error)
            alertAndLoaders("UNSHOW_ALERT",dispatch,"Error 404 Not Found", "error");
            return
          }
          alertAndLoaders("UNSHOW_ALERT",dispatch,"Saved SucessFully", "success");
        })
        console.log("create")
        dispatch(actionsTable.setExecuteQuery(true))
      }
    });
    dispatch(actionsTable.setExecuteQuery(true))
  };

  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
      {alertStore.showAlert ? 
        <div style={{zIndex:"2000",position:"fixed",width:"60%"}}>
            <MDAlert color={alertStore.color} dismissible={true}>
              <h5>{alertStore.message}</h5>
            </MDAlert>
           </div>
            :""
       }
        <DashboardNavbar absolute />
      </MDBox>
      <MDBox py={3} mt={7}>
      <Box sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12} mb={1}>
              <FilterBasic showShift={true} onPress={executeQuery} />
            </Grid>
            <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
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
