import React from "react";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';


// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import PhysicalPhenomenaTable from "./physicalPhenomenaTable";

function PhysicalPhenomena(){

    return(
        <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
      {/* {store.showAlert ? 
        <div style={{zIndex:"2000",position:"fixed",width:"60%"}}>
            <MDAlert color={store.color} dismissible={true}>
              <h5>{store.message}</h5>
            </MDAlert>
           </div>
            :""
       } */}
        <DashboardNavbar absolute />
      </MDBox>
      <MDBox py={3} mt={7}>
      <Box sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
                    <PhysicalPhenomenaTable/>
                  </CardContent>
                </Card>          
            </Grid>
          </Box>
      </MDBox>
      <Footer />
    </DashboardLayout>
    )
}

export default PhysicalPhenomena;