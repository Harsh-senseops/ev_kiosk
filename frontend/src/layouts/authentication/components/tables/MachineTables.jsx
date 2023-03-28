import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import LinearProgress from "@mui/material/LinearProgress";
import TextField from '@mui/material/TextField';

const style = {
  color: "#ecf2ff",
  textAlign: "center",
};
export default function MachineTable({data,role,handleClickOpen,handleSelectValues}) {
  return (
    <>
      {!data ? (
        <LinearProgress color="info" style={{ overflow: "hidden" }} />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableRow style={{ background: "#3c3c43" }}>
              <TableCell style={style}>
                <b>Machine</b>
              </TableCell>
              <TableCell style={style}>
                <b>Physical Phenomena</b>
              </TableCell>
              <TableCell style={style}>
                <b>Phenomenon No</b>
              </TableCell>
              <TableCell style={style}>
                <b>Action Taken</b>
              </TableCell>
              <TableCell style={style}>
                <b>Bttery Pack ID</b>
              </TableCell>
            </TableRow>
            <TableBody>
              {data.map((row, i) => {
                return role.machineToShow.map((val) => {
                  if (val === row.machine_id || role.roles === 1 ) {
                    return (
                      <TableRow
                        key={row.machine_name}
                        sx={{ "&:nth-of-type(odd)": { backgroundColor: "#ECF2FF" } }}
                      >
                        <TableCell component="th" style={{ fontWeight: "400" }} scope="row">
                          {row.machine_name}
                        </TableCell>

                        <TableCell>
                          <FormControl fullWidth>
                            <InputLabel
                              style={{ height: "20px" }}
                              id="demo-simple-select-helper-label"
                            >
                              Physical Phenomena
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Physical Phenomena"
                              style={{ height: "40px", fontWeight: "400" }}
                              value={row.value}
                              onChange={(e) => handleSelectValues(i, e, "pp")}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {row.physicalPhenomena.map((val) => {
                                return (
                                  <MenuItem
                                    key={val.phenomena_no}
                                    style={{ fontWeight: "400" }}
                                    value={val.phenomena_name}
                                  >
                                    <Tooltip title={val.phenomena_name}>
                                      <div>
                                        {" "}
                                        {val.phenomena_name.length > 20
                                          ? val.phenomena_name.slice(0, 20) + "..."
                                          : val.phenomena_name}
                                      </div>
                                    </Tooltip>
                                  </MenuItem>
                                );
                              })}
                              {role.roles === 1 ? (
                                <MenuItem
                                  style={{ fontWeight: "400" }}
                                  value=""
                                  onClick={() => handleClickOpen(i, "Physical Phenomena")}
                                >
                                  Add Item
                                </MenuItem>
                              ) : (
                                <div></div>
                              )}
                            </Select>
                          </FormControl>
                        </TableCell>

                        <TableCell size="small" style={{ textAlign: "center", fontWeight: "200" }}>
                          {!row.value ? (
                            <em>N/A</em>
                          ) : (
                            row.physicalPhenomena.map((val) => {
                              if (val.phenomena_name === row.value) {
                                return val.phenomena_no;
                              }
                            })
                          )}
                        </TableCell>

                        <TableCell>
                          
                            <FormControl fullWidth disabled={row.value ? false :true}>
                              <InputLabel
                                style={{ height: "20px" }}
                                id="demo-simple-select-helper-label"
                              >
                                <b> Action Taken</b>
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Action Taken"
                                style={{ height: "40px", fontWeight: "400" }}
                                value={row.action_taken_value ? row.action_taken_value : ""}
                                onChange={(e) => handleSelectValues(i, e, "fd")}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                {row.physicalPhenomena.map((val, i) => {
                                  if (val.phenomena_name == row.value) {
                                    return val.action_taken.map((val) => {
                                      if (!val) return;

                                      return (
                                        <MenuItem
                                          key={val}
                                          style={{ fontWeight: "400" }}
                                          value={val}
                                        >
                                          <Tooltip describeChild title={val}>
                                            <div>
                                              {val.length > 20 ? val.slice(0, 20) + "..." : val}
                                            </div>
                                          </Tooltip>
                                        </MenuItem>
                                      );
                                    });
                                  }
                                })}
                                {role.roles === 1 ? (
                                  <MenuItem
                                    style={{ fontWeight: "400" }}
                                    value=""
                                    onClick={() => handleClickOpen(i, "Action Taken")}
                                  >
                                    {" "}
                                    Add Item
                                  </MenuItem>
                                ) : (
                                  ""
                                )}
                              </Select>
                            </FormControl>
                          
                        </TableCell>
                        <TableCell>
                        {!row.battery_pack_id?<TextField disabled={row.value ? false:true} id="batter-pack-id" label="Battery Pack ID" variant="outlined" onChange={(e)=>row.battery_pack_id = e.target.value}/>:<TextField disabled={row.value ? false:true} id="batter-pack-id" label="Battery Pack ID" variant="outlined" onChange={(e)=>row.battery_pack_id = e.target.value}/>}
                        </TableCell>
                      </TableRow>
                    )
                  }else{
                    // return (<h1>No data to Display</h1>)
                  }
                });
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
