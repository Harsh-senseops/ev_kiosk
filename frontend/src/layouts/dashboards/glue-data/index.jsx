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
import { ADD_GLUE_LOSS_DATA } from "queries/allQueries";
import {useDispatch,useSelector} from "react-redux";
import { useMutation } from "urql";
import * as action from "../../../reduxSlices/table";
import alertAndLoaders from "util/alertAndLoaders";
import MDAlert from "components/MDAlert";

function GlueData() {
    const [machine, setMachine] = React.useState('');
    const [glueLoss,setGlueLoss] = React.useState("");
    const dispatch = useDispatch();
    const [glueLossRes,updateGlueLoss] = useMutation(ADD_GLUE_LOSS_DATA);
    const alertStore = useSelector((store) => {
      return store.alert;
    });

    React.useEffect(() => {
      dispatch(action.setShift("Shift 1"));
    }, []);

    const handleChange = (event) => {
      setMachine(event.target.value);
    };

    const shiftVal = useSelector((store)=>{
      return store.table.shift
    });

    React.useEffect(() => {
      dispatch(action.setShift("Shift 1"));
    }, []);

    const pushData = () => {
      if(!glueLoss || !machine){
          alertAndLoaders("UNSHOW_ALERT", dispatch, "Please enter all fields", "warning");
          return
      }
      updateGlueLoss({
        gMachineName:machine,
        glueLoss:Number(glueLoss),
        gShift:shiftVal
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
            <MDBox mt={4}>
              <FormControl fullWidth>
                <InputLabel style={{ height: "20px" }} id="demo-simple-select-label">
                  Machine Name
                </InputLabel>
                <Select
                  style={{ height: "40px", fontWeight: "400" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={machine}
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
                label="Glue Loss data"
                type="text"
                sx={{ width: "100%" }}
                value={glueLoss}
                onChange={(e) => setGlueLoss(e.target.value)}
              />
            </MDBox>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default GlueData;
