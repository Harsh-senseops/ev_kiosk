import Grid from "@mui/material/Grid";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { useEffect, useState } from "react";
import MDTypography from "components/MDTypography";
import { Stack } from "@mui/system";
import ReactFlowFinal from "./ReactFlowFinal";
import Stack1 from "../StackView/Stack1";
import Stack2 from "../StackView/Stack2";
import Stack3 from "../StackView/Stack3";
import Stack4 from "../StackView/Stack4";
import Stack5 from "../StackView/Stack5";
import Stack6 from "../StackView/Stack6";
import Stack7 from "../StackView/Stack7";
import Stack8 from "../StackView/Stack8";
import Stack9 from "../StackView/Stack9";
import MDButton from "components/MDButton";

const FlowchartView = (data) => {
    console.log("Data in flowchart", data)

    const [selectedBatteryZone, setSelectedBatteryZone] = useState(null)   

    console.log("Cell picker data", selectedBatteryZone)

    const pull_zone_func = (data) => {
        console.log("Zone ID in final flowchart", data)
        if(data == 1) {
            setSelectedBatteryZone("Cell data")
        } else if(data == 2) {
            setSelectedBatteryZone("Stacking")
        } else if(data == 3) {
            setSelectedBatteryZone("Welding Station")
        } else if(data == 4) {
            setSelectedBatteryZone("Weld Interity")
        } else if(data == 5) {
            setSelectedBatteryZone("Thermal Layer")
        } else if(data == 6) {
            setSelectedBatteryZone("Foam Layer")
        } else if(data == 7) {
            setSelectedBatteryZone("Insertion Layer")
        }
    }

    console.log("Selected battery zone", selectedBatteryZone)

    return (
        <div>
        <Grid item xs={10} md={12}>
        <Card>
            <MDTypography variant="button" fontWeight="medium" ml={1} mt={1}>Stack Barcode: {data.data}</MDTypography>
            
            <CardContent>
                  {/* <button onClick={e => setSelectedBatteryZone("Cell data")}>Cell data</button>
                  <button onClick={e => setSelectedBatteryZone("Stacking")}>Stacking</button>
                  <button onClick={e => setSelectedBatteryZone("Welding Station")}>Welding Station</button>
                  <button onClick={e => setSelectedBatteryZone("Weld Integrity")}>Weld Integrity</button>
                  <button onClick={e => setSelectedBatteryZone("Thermal Layer")}>Thermal Layer</button>
                  <button onClick={e => setSelectedBatteryZone("Foam Layer")}>Foam Layer</button>
                  <button onClick={e => setSelectedBatteryZone("Insertion Layer")}>Insertion Layer</button> */}
                  <ReactFlowFinal zone_func = {pull_zone_func} />
            </CardContent>
        </Card>
        </Grid>
        { selectedBatteryZone ?  
//         <Grid container spacing={2}>
//         <Grid item xs={12} md={12} mt={2}>
//         <Card>
//             <MDTypography variant="button" fontWeight="medium" ml={1} mt={1}>Stack: {data.data}, Zone: {selectedBatteryZone}</MDTypography>
            // <CardContent>
            // <Grid container rowSpacing={0} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}>
            //       <Stack1 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack2 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack3 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack4 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack5 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack6 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack7 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack8 stackID={data.data} zone={selectedBatteryZone} />
            //       <Stack9 stackID={data.data} zone={selectedBatteryZone} />
            // </Grid>
            // </CardContent>
//         </Card>
//         </Grid>
//          <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//        </Grid> 

        <Grid container spacing={2} mt={1}>
        <Grid item xs={8}>
            <Card>
            <MDTypography variant="button" fontWeight="medium" ml={1} mt={1}>Stack: {data.data}, Zone: {selectedBatteryZone}</MDTypography>
            <CardContent>
            {/* <Grid container rowSpacing={0} columnSpacing={{ xs: 0.5, sm: 0.5, md: 0.5 }}> */}
                  <Stack1 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack2 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack3 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack4 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack5 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack6 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack7 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack8 stackID={data.data} zone={selectedBatteryZone} />
                  <Stack9 stackID={data.data} zone={selectedBatteryZone} />
            {/* </Grid> */}
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card>
            <MDTypography variant="button" fontWeight="medium" ml={1} mt={1} mb={1}>Selected Cell Barcode</MDTypography>
        </Card>
        </Grid>
        </Grid>
        : null
        }
       
        </div>
    )
}

export default FlowchartView