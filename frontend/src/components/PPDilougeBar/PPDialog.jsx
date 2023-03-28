import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useQuery } from "urql";
import { Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TODAYS_PP_RECORDS,PPR_BY_DATE } from "queries/allQueries";
import TextField from "@mui/material/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = {
    color: "black",
    textAlign: "center",
  };

export default function FullScreenDialog({ setOpen, open }) {
  const [todayspprResults, reExecTodayspprReesults] = useQuery({
    query: TODAYS_PP_RECORDS,
  });
  const [dateValueFrom,setDateValueFrom] = React.useState("");
  // const d = new Date(dateValueFrom)
  const [PPRbasedOnDateResults, reExecPPRbasedOnDateResults] = useQuery({
    query: TODAYS_PP_RECORDS,
    variables:{
      // date: dateValueFrom ? `${dateValueFrom.$d.getFullYear()}-${dateValueFrom.$d.getMonth()}-${dateValueFrom.$d.getDate()}`:""
      date:"2023-2-8"
    }
  });
  const [data1,setData] = React.useState("")

  const { data, fetching, error } = todayspprResults;
  console.log(PPRbasedOnDateResults,`${dateValueFrom.$d.getFullYear()}-${dateValueFrom.$d.getMonth()}-${dateValueFrom.$d.getDate()}`)
  React.useEffect(()=>{
    if(data){
        setData(data.getTodaysPhysicalPhenomena);
    }
  },[data])
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          p={1}
        >
        <Grid item xs={2.3} marginRight={5}>
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
                    </Grid>
                   
      {data1 ? <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">  
              <TableRow>
                <TableCell style={style}><b>Machine</b></TableCell>
                <TableCell style={style}><b>Physical Phenomena</b></TableCell>
                <TableCell style={style}><b>Phenomena Number</b></TableCell>
                <TableCell style={style}><b>Action Taken</b></TableCell>
              </TableRow>
            <TableBody>
             {data1.map((val)=>{
               return ( <TableRow
                 key={val.ppr_Id}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
                 <TableCell align="center"scope="row">
                   {val.machine}
                 </TableCell>
                 <TableCell align="center">{val.p_phenomena}</TableCell>
                 <TableCell align="center">{val.phenomena_no}</TableCell>
                 <TableCell align="center">{val.action_taken}</TableCell>
               </TableRow>)
             })}
            </TableBody>
          </Table>
        </TableContainer>:""}
      </Dialog>
    </div>
  );
}
