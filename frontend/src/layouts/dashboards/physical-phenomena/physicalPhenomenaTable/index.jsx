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

const TableData = [
    //1
  {
    machine: "Cell Testing",
    physicalPhenomena: [
      { pp: "AC IR value High/Low", phNo: 1 },
      { pp: "OCV value High/Low", phNo: 2 },
      { pp: "Bar Code NG", phNo: 3 },
      { pp: "Contact Error", phNo: 4 },
    ],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //2
  {
    machine: "Cell Stacking & Dismantling",
    physicalPhenomena: [
      { pp: "Glue on Cell Welding Area", phNo: 5 },
      { pp: "Cell Bonding Open and Bonding week", phNo: 6 },
      { pp: "Glue on BMS Side", phNo: 7 },
    ],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //3
  {
    machine: "Z-Fixation",
    physicalPhenomena: [{ pp: "Caulking miss & Angel Hair", phNo: 8 }],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //4
  {
    machine: "Welding & Weld integrity",
    physicalPhenomena: [
      { pp: "Weld miss cell busbar", phNo: 9 },
      { pp: "Weld Miss Main Busbar minus", phNo: 10 },
      { pp: "High resistance weld Rework", phNo: 11 },
      { pp: "Weld Miss Flex PCB", phNo: 12 },
      { pp: "Weld Miss Main Busbar Plus", phNo: 13 },
    ],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //5
  {
    machine: "Foaming",
    physicalPhenomena: [
      { pp: "Foam on Bms Side", phNo: 14 },
      { pp: "Less Foam rework", phNo: 15 },
    ],
    value: "",
    actionTaken: ["Under Analysis"],
  },

    //6
  {
    machine: "Thermal Pasting",
    physicalPhenomena: [{ pp: "Curing time more/Thermal paste profile offset", phNo: 16 }],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //7
  {
    machine: "BMS Activation",
    physicalPhenomena: [{ pp: "BMS Error LED light Glowing(BMS Replaced)", phNo: 17 }],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //8
  {
    machine: "Module Insertion",
    physicalPhenomena: [{ pp: "Manual Application of Glue", phNo: 18 }],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //9
  {
    machine: "EOL",
    physicalPhenomena: [{ pp: "BMS not showing data", phNo: 19 }],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //10
  {
    machine: "Leak Testing",
    physicalPhenomena: [{ pp: "Rework With Loctite", phNo: 20 }],
    value: "",
    actionTaken: ["Under Analysis"],
  },
    //11
  {
    machine: "Dispatch",
    physicalPhenomena: [
      { pp: "Top/Bottom Lid Gap Rework with HB Fuller", phNo: 22 },
      { pp: "Breather Fitment coming outside", phNo: 23 },
      { pp: "Rubber Mat torn out", phNo: 24 },
    ],
    value: "",
    actionTaken: ["Under Analysis"],
  },
];

const style = {
  color: "#e0040b",
};

function PhysicalPhenomenaTable() {
  const [data, setData] = React.useState(TableData);

  const handleSelectValues = (i, e) => {
    let obj = [...data];
    obj[i].value = e.target.value;
    setData(obj);
  };
  return (
    <Grid mt={2}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableRow style={{ background: "#191310" }}>
            <TableCell>
              <b style={style}>Machine</b>
            </TableCell>
            <TableCell>
              <b style={style}>Physical Phenomena</b>
            </TableCell>
            <TableCell>
              <b style={style}>Phenomena No</b>
            </TableCell>
            <TableCell>
              <b style={style}>Action Taken</b>
            </TableCell>
            <TableCell>
              <b style={style}>Action Status</b>
            </TableCell>
          </TableRow>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={row.machine}
                sx={{ "&:nth-of-type(odd)": { backgroundColor: "#ECF2FF" } }}
              >
                <TableCell background={{ background: "red" }} component="th" scope="row">
                  {row.machine}
                </TableCell>
                <TableCell>
                  <FormControl fullWidth>
                    <InputLabel style={{ height: "35px" }} id="demo-simple-select-helper-label">
                      Physical Phenomena
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Physical Phenomena"
                      style={{ height: "40px" }}
                      value={row.value}
                      onChange={(e) => handleSelectValues(i, e)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {row.physicalPhenomena.map((val) => {
                        return <MenuItem key={val.phNo} value={val.pp}>{val.pp}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  {!row.value
                    ? 0
                    : row.physicalPhenomena.map((val) => {
                        if (val.pp === row.value) {
                          return val.phNo;
                        }
                      })}
                </TableCell>
                <TableCell>Something</TableCell>
                <TableCell>Something</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default PhysicalPhenomenaTable;
