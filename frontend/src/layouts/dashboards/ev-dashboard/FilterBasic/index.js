import React, {useState,useCallback} from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Autocomplete from "@mui/material/Autocomplete";
import FormField from "layouts/pages/account/components/FormField";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import MDButton from 'components/MDButton';
import * as actions from "../../../../reduxSlices/table";
import { useDispatch,useSelector } from "react-redux";
import { act } from 'react-dom/test-utils';
import { useMutation } from "urql";
const POST_MUTATION = `
mutation Mutation($zone: Int, $shift: String, $productionCount: Int) {
  createProductionCount(Zone: $zone, Shift: $shift, ProductionCount: $productionCount) {
    ProductionCount
    Shift
    Zone
  }
}
`;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const FilterBasic = () => {
    const [result, execute] = useMutation(POST_MUTATION);
    const selectData = {
        shift: ["Shift 1", "Shift 2", "Shift 3"]
      }
    const store = useSelector((store)=>{
        return store.table.tableData;
    })
    const dispatch = useDispatch();
    console.log("from filter basic")
    function shiftValue(){
        if(store.shift === "Shift 1"){
          return "A"
        }
        else if (store.shift === "Shift 2"){
          return "B"
        }
        return "C"
      }
    const executeQuery = useCallback(()=>{
      console.log("hoola")
      store.productionCount.map((val) => {
        if (!val.field) return;
        execute({
          zone: val.id,
          shift: shiftValue(),
          productionCount: Number(val.field),
        });
      });
      dispatch(actions.setAlert(true));
      setTimeout(() => {
        dispatch(actions.setAlert(false))
      }, 2000);
    })
    return (
        <Card style={{backgroundColor: '#f6f7f9'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} direction="row" alignItems="center" justifyContent="flex-end" p={1}>
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
                                dispatch(actions.setShift(newValue));
                                console.log(newValue)
                              }}
                            renderInput={(params) => (
                                <FormField {...params} label="Selected Shift" InputLabelProps={{ shrink: true }} />
                            )}
                        />
                    </Grid>
                    <Grid item xs={1}>
                      <MDButton onClick={executeQuery} variant="gradient" color="info">Apply</MDButton>    
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}

export default React.memo(FilterBasic);