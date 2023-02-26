import React, { useState, useCallback } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import FormField from "layouts/pages/account/components/FormField";
import MDButton from "components/MDButton";
import * as actionsTable from "../../../../reduxSlices/table";
import * as alertAction from "../../../../reduxSlices/alert";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "urql";
const POST_MUTATION = `
mutation Mutation($zone: Int, $shift: String, $productionCount: Int) {
  createProductionCount(Zone: $zone, Shift: $shift, ProductionCount: $productionCount) {
    ProductionCount
    Shift
    Zone
  }
}
`;

const UPDATE_MUTATION = `
mutation Mutation($id: Int, $productionCount: Int) {
  updateProductionCount(Id: $id, ProductionCount: $productionCount) {
    Date
    Id
    ProductionCount
    Shift
    Zone
  }
}
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FilterBasic = () => {
  const store = useSelector((store) => {
    return store.table;
  });

  const [createResult, createVals] = useMutation(POST_MUTATION);
  const [updateResult, upadateValue] = useMutation(UPDATE_MUTATION);
  const selectData = {
    shift: ["Shift 1", "Shift 2", "Shift 3"],
  };

  const store2 = useSelector((store) => {
    return store.alert;
  });
  const dispatch = useDispatch();
  const executeQuery = useCallback(() => {
    store.fieldValues.map((val, index) => {
      if (!val.field) {
        // if(index===3){
        //   alert("Fields cannot be empty")
        // }
        return;
      } else if (val.dbId !== 0 && val.dbId !== "") {
        upadateValue({
          id: val.dbId,
          productionCount: Number(val.field),
        });
        dispatch(alertAction.setLoader(true));
        setTimeout(() => {
          dispatch(alertAction.setLoader(false));
          dispatch(
            alertAction.setAlertData({
              message: "Updated SucessFully",
              show: true,
              color: "primary",
            })
          );
        }, 2000);

        setTimeout(() => {
          dispatch(alertAction.setAlertData({ show: false }));
        }, 4000);
      } else {
        createVals({
          zone: val.id,
          shift: store.shift,
          productionCount: Number(val.field),
        });
        dispatch(alertAction.setLoader(true));
        setTimeout(() => {
          dispatch(alertAction.setLoader(false));
          dispatch(
            alertAction.setAlertData({ message: "Saved SucessFully", show: true, color: "success" })
          );
        }, 2000);

        setTimeout(() => {
          dispatch(alertAction.setAlertData({ show: false }));
        }, 4000);
      }
    });
    // if(getValues().length === 0){
    //   alert("Please enter production count")
    //   return
    // }
    //  getValues().map((val)=>{
    //     if (!val.field){
    //       return
    //     }else if (val.dbId !== 0){
    //       upadateValue({
    //         id: val.dbId,
    //       productionCount: Number(val.field)
    //       })
    //       setTimeout(() => {
    //         dispatch(alertAction.setAlertData({show:false,}))
    //       }, 2000);
    //       dispatch(alertAction.setAlertData({message:"Updated SucessFully",show:true,color:"primary"}));

    //     }else {
    //     }
    //   })

    // console.log(getValues())
    // dispatch(actions.setTodaysData({shift:shift,shiftData:result.data.findProductionByShift}))
    // console.log(result2)
  });
  return (
    <Card style={{ backgroundColor: "#f6f7f9" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          p={1}
        >
          {/* <Grid item xs={2}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            views={['year', 'month', 'day']}
                            label="Date"
                            minDate={new Date('2012-03-01')}
                            maxDate={new Date('2023-06-01')}
                            value={dateValueFrom}
                            onChange={setDateValueFrom}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                    </Grid> */}
          <Grid item xs={2}>
            <Autocomplete
              defaultValue="Shift 1"
              options={selectData.shift}
              onChange={(event, newValue) => {
                dispatch(actionsTable.setShift(newValue));
              }}
              renderInput={(params) => (
                <FormField {...params} label="Selected Shift" InputLabelProps={{ shrink: true }} />
              )}
            />
          </Grid>
          <Grid item xs={1}>
            <MDButton onClick={executeQuery} variant="gradient" color="info">
              Apply
            </MDButton>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default FilterBasic;
