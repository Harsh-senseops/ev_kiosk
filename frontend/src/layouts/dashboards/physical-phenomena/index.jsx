import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import PhysicalPhenomenaTable from "./physicalPhenomenaTable";
import { useSelector } from "react-redux";
import MDAlert from "components/MDAlert";
import { LinearProgress } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./pp.css";
import RejectionRework from "../rejection-rework";

function PhysicalPhenomena() {
  const alertStore = useSelector((store) => {
    return store.alert;
  });

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        {alertStore.showAlert ? (
          <div style={{ zIndex: "2000", position: "fixed", width: "60%" }}>
            <MDAlert color={alertStore.color} dismissible={true}>
              <h5>{alertStore.message}</h5>
            </MDAlert>
          </div>
        ) : (
          ""
        )}
        <DashboardNavbar absolute />
      </MDBox>

      <MDBox py={3} mt={8}>
        <Box style={{marginBottom:"10px"}} sx={{ width: "100%", typography: "body1", flexGrow: 1 }}>
          <TabContext value={value} style={{marginBottom:"10px"}}>
            <Grid item xs={12} md={12} mb={0}>
              <Card>
                <CardContent style={{ padding: "10px" }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Physical Phenomena" value="1" />
                    <Tab label="Rejection Work" value="2" />
                  </TabList>
                </CardContent>
              </Card>
            </Grid>
            <TabPanel value="1">
              {alertStore.loader ? <LinearProgress color="success" style={{overflow:"hidden"}} /> : ""}
              <Box sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={12}>
                  <PhysicalPhenomenaTable />
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <RejectionRework />
            </TabPanel>
          </TabContext>
        </Box>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default React.memo(PhysicalPhenomena);
