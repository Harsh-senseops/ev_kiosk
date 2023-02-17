// @mui material components
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";

// react imports
import { useState } from "react";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Masterpartlistupload from "./master-part-list-upload";
import DropFileInput from "./drop-file-input";

function AnnualPlanner() {

  const onFileChange = (files) => {
    console.log(files);
}

  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar dark absolute />
      </MDBox>
      <MDBox pt={10} pb={3}>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Annual Planner
            </MDTypography>
            {/* <MDTypography variant="button" color="text">
              Please configure equipment details for all components
            </MDTypography> */}
          </MDBox>
          <Grid 
          // item xs={12} md={6} xl={4} 
          container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center">
              <Grid item xs={3}>
            {/* <Masterpartlistupload /> */}
            <DropFileInput onFileChange={(files) => onFileChange(files)}/>
            </Grid>
          </Grid>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AnnualPlanner;
