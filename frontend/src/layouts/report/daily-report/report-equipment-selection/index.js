// @mui material components
import Card from "@mui/material/Card";

// react imports
import { useState } from "react";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import FormField from "layouts/pages/account/components/FormField";
import DailyReportTable from "../daily-report-table";
import MDButton from "components/MDButton";

function ReportEquipmentSelection() {
    const [equipmentSelected, setEquipmentSelected] = useState("")

    const selectData =  {
        equipment: ["Climatic Chamber", "Dust", "Shower Testing", "Thermal Shock Chamber"]
      };

  const handleChangeEquipment = (value) => {
    setEquipmentSelected(value)
  }

  return (
    <MDBox>
    <Grid item xs={12} sm={4} mr={100} mt={3} mb={3}>
    <Autocomplete
    //   defaultValue="Male"
      options={selectData.equipment}
      onChange={(event, value) => handleChangeEquipment(value)}
      renderInput={(params) => (
        <FormField {...params} label="Select Equipment" InputLabelProps={{ shrink: true }} />
      )}
    />
  </Grid>
  {equipmentSelected ? 
    <DailyReportTable currentReportEquipment={equipmentSelected}/> 
    : null}
    {/* <DailyReportTable currentReportEquipment={equipmentSelected} /> */}
  </MDBox>
  );
}

export default ReportEquipmentSelection;
