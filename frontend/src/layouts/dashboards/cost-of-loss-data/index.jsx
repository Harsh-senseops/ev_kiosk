import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import FilterBasic from "../ev-dashboard/FilterBasic";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useMutation } from "urql";
import { ADD_COST_OF_LOSS_DATA } from "queries/allQueries";
import alertAndLoaders from "util/alertAndLoaders";
import {useDispatch,useSelector} from "react-redux";
import {LinearProgress} from "@mui/material";
import MDAlert from "components/MDAlert";
import * as action from "../../../reduxSlices/table"

function CostOfLossdData() {
    const [machineName,setMachineName] = React.useState('');
    const [costData,setCostData] = React.useState('');
    const [costDataResult,updateCostData] = useMutation(ADD_COST_OF_LOSS_DATA);
    const dispatch = useDispatch();
    const alertStore = useSelector((store) => {
        return store.alert;
      });

    const shiftVal = useSelector((store)=>{
        return store.table.shift
      });

      React.useEffect(() => {
        dispatch(action.setShift("Shift 1"));
      }, []);

    const handleChange = (event) => {
        setMachineName(event.target.value);
    };

    const pushData = () => {
        if(!costData || !machineName){
            alertAndLoaders("UNSHOW_ALERT", dispatch, "Please enter all fields", "warning");
            return
        }
        updateCostData({
          cMachineName:machineName,
          lossData:Number(costData),
          cShift:shiftVal
        }).then((result)=>{
            if(result.error){
                console.log(result.error)
                alertAndLoaders("UNSHOW_ALERT", dispatch, "Error 404 Not Found", "error");
                return
            }
            alertAndLoaders("UNSHOW_ALERT", dispatch, "Successfully added", "success");
        })
    }
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
      <MDBox pt={3} mt={7}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12} md={12} mb={1}>
            <FilterBasic showShift={true} onPress={pushData} />
          </Grid>
        </Box>
      </MDBox>
      <Grid alignItems="center" justifyContent="center" item xs={12} md={12} pb={2}>
        <Card style={{ height: "60vh" }}>
          <CardContent>
          {alertStore.loader ? (
                <LinearProgress color="success" style={{overflow:"hidden"}}/>
              ) : (
                ""
              )}
            <MDBox mt={4}>
            <FormControl fullWidth>
              <InputLabel style={{height:"20px"}} id="demo-simple-select-label">Machine Name</InputLabel>
              <Select
               style={{ height: "40px", fontWeight: "400" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={machineName}
                label="Machine Name"
                onChange={handleChange}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={"Ten"}>Ten</MenuItem>
                <MenuItem value={"Twenty"}>Twenty</MenuItem>
                <MenuItem value={"Thirty"}>Thirty</MenuItem>
              </Select>
            </FormControl>
            </MDBox>

            <MDBox mt={4}>
            <TextField
              id="outlined-password-input"
              label="Cost of loss data"
              type="number"
              sx={{ width: "100%" }}
              value={costData}
              onChange={(e) => setCostData(e.target.value)}
            />
             </MDBox>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </DashboardLayout> 
  );
}

export default CostOfLossdData;
