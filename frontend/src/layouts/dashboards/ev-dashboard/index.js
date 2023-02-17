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
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Header from "./Header";

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
import timelineData from "layouts/pages/projects/timeline/data/timelineData";
import TimelineItem from "examples/Timeline/TimelineItem";
import TimelineList from "examples/Timeline/TimelineList";
import FlowchartView from "./FlowchartView";
import FilterBasic from "./FilterBasic";

// Anaytics dashboard components
import SalesByCountry from "layouts/dashboards/analytics/components/SalesByCountry";

// Data
import reportsBarChartData from "layouts/dashboards/analytics/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboards/analytics/data/reportsLineChartData";

// Images
import booking1 from "assets/images/products/product-1-min.jpg";
import booking2 from "assets/images/products/product-2-min.jpg";
import booking3 from "assets/images/products/product-3-min.jpg";

function EVDashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [equipmentSelected, setEquipmentSelected] = useState("")
  const [selectedStackData, setSelectedStackData] = useState(null)

  const selectData =  {
    equipment: ["Battery 1", "Battery 2", "Battery 3", "Battery 4"]
  };

  const handleChangeEquipment = (value) => {
    setEquipmentSelected(value)
  }

  const renderTimelineItems = timelineData.map(
    ({ color, icon, title, dateTime, description, badges, lastItem }) => (
      <TimelineItem
        key={title + color}
        color={color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        badges={badges}
        lastItem={lastItem}
      />
    )
  );

  const pull_data1 = (data) => {
    console.log("Current barcode in final parent", data)
    setSelectedStackData(data)
  }

 
  return (
    <DashboardLayout>
      <MDBox width="calc(100% - 48px)" position="absolute" top="1.75rem">
        <DashboardNavbar absolute />
      </MDBox>
      <MDBox py={3} mt={7}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid item xs={12} md={12} mb={1}>
              <FilterBasic />
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={2} md={2}>
              <Card>
                <CardContent>
                  <Header func1={pull_data1}/>
                </CardContent>
              </Card>
              </Grid>
              {selectedStackData ?
                   <Grid item xs={10}>
                   <FlowchartView data={selectedStackData}/>
               {/* <Card style={{marginTop: '1%'}}>
                 <CardContent>
                   <StackView data={selectedStackData}/>
                 </CardContent>
               </Card> */}
               </Grid> : null
              }
             
            </Grid>
          </Box>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default EVDashboard;
