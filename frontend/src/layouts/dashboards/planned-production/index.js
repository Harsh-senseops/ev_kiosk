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
import Autocomplete from "@mui/material/Autocomplete";
import FormField from "layouts/pages/account/components/FormField";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import BookingCard from "examples/Cards/BookingCard";
import PlannedProductionTable from "./plannedProductionTable";
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";
import FilterBasic from "../ev-dashboard/FilterBasic";
import { useMutation, useQuery } from "urql";
import MDAlert from "components/MDAlert";
import { useSelector, useDispatch } from "react-redux";




function PlannedProduction() {
  // const [alert,setAlert] = useState(false)
  const store = useSelector((store)=>{
    return store.table.tableData;
})
  // const dispatch = useDispatch();
  
  console.log("Planned Parent")
  // const [data, setData] = useState([
  //   { zone: "Zone 1", field: "", id: 1 },
  //   { zone: "Zone 2", field: "", id: 2 },
  //   { zone: "Zone 3.1", field: "", id: 3 },
  //   { zone: "Zone 3.2", field: "", id: 4 },
  // ]);
  // const obj = [
  //   {zone:data[0].zone,field:data[0].field,id:data[0].id},
  //   {zone:data[1].zone,field:data[1].field,id:data[1].id},
  //   {zone:data[2].zone,field:data[2].field,id:data[2].id},
  //   {zone:data[3].zone,field:data[3].field,id:data[3].id},

  // ]
  // React.useEffect((val)=>{
  //   dispatch(action.setProductionCount(obj))
  // },[data])



// console.log(store)
  return (
    <DashboardLayout>
       {store.alert ? 
        <div style={{zIndex:"2000",position:"fixed",width:"100%"}}>
            <MDAlert color="success" dismissible={true}>
              <h5>Saved Sucessfully</h5>
            </MDAlert>
            </div>:""
       }
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
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
                    <PlannedProductionTable />
                  </CardContent>
                </Card>          
            </Grid>
          </Box>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default React.memo(PlannedProduction);
