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
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery } from "urql";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import alertAndLoaders from "util/alertAndLoaders";
import {POST_MUTATION,UPDATE_MUTATION} from "queries/allQueries"

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

  const [dateValueFrom, setDateValueFrom] = useState(new Date());

  const [createResult, createVals] = useMutation(POST_MUTATION);
  const [updateResult, upadateValue] = useMutation(UPDATE_MUTATION);
  const selectData = {
    shift: ["Shift 1", "Shift 2", "Shift 3"],
  };

  const dispatch = useDispatch();
  
  const executeQuery = useCallback(() => {
    let counter = 0
    store.fieldValues.map(async(val, index) => {
      if (!val.field) {
       counter++;
        if(counter===4){
          await alertAndLoaders("Feilds cannot be empty","warning",dispatch)
        }
        return;
      } else if (val.dbId !== 0 && val.dbId !== "") {
        upadateValue({
          id: val.dbId,
          productionCount: Number(val.field),
        }).then((result)=>{
          if(result.error){
             alertAndLoaders("Error 404 Not Found","error",dispatch)
             return
          }
           alertAndLoaders("Updated SucessFully","primary",dispatch)
        })
      } else {
        createVals({
          zone: val.id,
          shift: store.shift,
          productionCount: Number(val.field),
        }).then((result)=>{
          if(result.error){
            alertAndLoaders("Error 404 Not Found","error",dispatch)
            return
          }
          alertAndLoaders("Saved SucessFully","success",dispatch)
        })
      }
    });
    dispatch(actionsTable.setExecuteQuery(true))
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

          <Grid item xs={2}>
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
                    </Grid>
          <Grid item xs={2}>
            <Autocomplete
              defaultValue="Shift 1"
              options={selectData.shift}
              onChange={(event, newValue) => {
                if (newValue !== null)
                dispatch(actionsTable.setShift(newValue));
              }}
              renderInput={(params) => (
                <FormField {...params} label="Selected Shift" InputLabelProps={{ shrink: true }} />
              )}
            />
          </Grid>
          <Grid item>
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
