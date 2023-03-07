import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import "./pp.css";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MACHINE_DATA } from "queries/allQueries";
import { useQuery } from "urql";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MDButton from "components/MDButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const style = {
  color: "#ecf2ff",
};

function PhysicalPhenomenaTable() {
  const [shouldPause, setShouldPause] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [data1, setData] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [machineDataResult, reExecMachineDataResult] = useQuery({
    query: MACHINE_DATA,
    pause: shouldPause,
  });
  const ref = React.useRef();
  const [actionTakenValue, setActionTakenValue] = React.useState("");

  const { data, fetching, error } = machineDataResult;

  React.useEffect(() => {
    if (data) {
      setData(data.getAllMachineData);
      setShouldPause(true);
    }
  }, [data]);

  if (fetching) {
    return <h1>Loading.....</h1>;
  }

  const handleSelectValues = (i, e) => {
    let obj = [...data1];
    obj[i].value = e.target.value;
    setData(obj);
  };

  const handleClickOpen = (i, add) => {
    let obj = [...data1];
    setIndex(i);
    if (add === "add") {
      obj[index].actionTaken.push(actionTakenValue);
    }
    console.log(obj[index].actionTaken);
    console.log(index);
    setOpen(!open);
  };

  const check = () => {
    alert("Amigo");
  };

  return (
    <Grid mt={2}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        p={1}
      >
        <MDButton variant="gradient" color="info">
          Apply
        </MDButton>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableRow style={{ background: "#3c3c43" }}>
            <TableCell>
              <b style={style}>Machine</b>
            </TableCell>
            <TableCell>
              <b style={style}>Physical Phenomena</b>
            </TableCell>
            <TableCell>
              <b style={style}>Phenomenon No</b>
            </TableCell>
            <TableCell>
              <b style={style}>Action Taken</b>
            </TableCell>
          </TableRow>
          <TableBody>
            {data1
              ? data1.map((row, i) => (
                  <TableRow
                    key={row.machine}
                    sx={{ "&:nth-of-type(odd)": { backgroundColor: "#ECF2FF" } }}
                  >
                    <TableCell component="th" style={{ fontWeight: "400" }} scope="row">
                      {row.machine}
                    </TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        <InputLabel style={{ height: "20px" }} id="demo-simple-select-helper-label">
                          Physical Phenomena
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Physical Phenomena"
                          style={{ height: "40px", fontWeight: "400" }}
                          value={row.value}
                          onChange={(e) => handleSelectValues(i, e)}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {row.physicalPhenomena.map((val) => {
                            if (val.pp === "N/A") return;
                            return (
                              <MenuItem key={val.phNo} style={{ fontWeight: "400" }} value={val.pp}>
                                <Tooltip title={val.pp}>
                                  <div>
                                    {" "}
                                    {val.pp.length > 20 ? val.pp.slice(0, 20) + "..." : val.pp}
                                  </div>
                                </Tooltip>
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell size="small" style={{ textAlign: "center", fontWeight: "200" }}>
                      {!row.value ? (
                        <em>N/A</em>
                      ) : (
                        row.physicalPhenomena.map((val) => {
                          if (val.pp === row.value) {
                            return val.phNo;
                          }
                        })
                      )}
                    </TableCell>
                    <TableCell>
                      <FormControl fullWidth>
                        <InputLabel style={{ height: "20px" }} id="demo-simple-select-helper-label">
                          Action Taken
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Action Taken"
                          style={{ height: "40px", fontWeight: "400" }}
                          ref={ref}
                          value=""
                          onChange={check}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {row.actionTaken.map((val) => {
                            if (val === "N/A") {
                              return;
                            }
                            return (
                              <MenuItem
                                onClick={check}
                                key={val}
                                style={{ fontWeight: "400" }}
                                value={val}
                              >
                                <Tooltip describeChild title={val}>
                                  <div>{val.length > 20 ? val.slice(0, 20) + "..." : val}</div>
                                </Tooltip>
                              </MenuItem>
                            );
                          })}
                          <MenuItem
                            style={{ fontWeight: "400" }}
                            value=""
                            onClick={() => handleClickOpen(i, "dont add")}
                          >
                            {" "}
                            Add Item
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog fullWidth="true" maxWidth="sm" open={open} onClose={handleClickOpen}>
        <DialogTitle>Action Taken</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Action Taken</DialogContentText>
          <TextField
            onChange={(e) => setActionTakenValue(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Add Action Taken"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen}>Cancel</Button>
          <Button onClick={() => handleClickOpen(index, "add")}>ADD</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default React.memo(PhysicalPhenomenaTable);
