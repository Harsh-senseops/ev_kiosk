import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import FormField from "layouts/pages/account/components/FormField";
import MDButton from "components/MDButton";
import * as actionsTable from "../../../../reduxSlices/table";
import { useDispatch, useSelector } from "react-redux";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import MDAwsomeButton from "components/MDAwsomeButton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FilterBasic = ({showShift,onPress}) => {
  const store = useSelector((store) => {
    return store.table;
  });
  const [dateValueFrom, setDateValueFrom] = useState(new Date());
  const selectData = {
    shift: ["Shift 1", "Shift 2", "Shift 3"],
  };
  const dispatch = useDispatch();
  return (
    <Card style={{background:""}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          p={1}
        >
          <Grid item xs={2.5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            views={['year', 'month', 'day']}
                            label="Date"
                            readOnly
                            minDate={new Date('2012-03-01')}
                            maxDate={new Date('2023-06-01')}
                            value={dateValueFrom}
                            onChange={setDateValueFrom}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                    </Grid>
          {showShift ? <Grid item xs={2}>
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
          </Grid>:""}
          <Grid item>
            {/* <MDButton onClick={onPress} variant="gradient" color="info">
              Apply
            </MDButton> */}

            <MDAwsomeButton name="Apply" onPress={onPress}/>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default FilterBasic;
