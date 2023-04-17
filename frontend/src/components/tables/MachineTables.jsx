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
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

const tableRowStyle = {
  fontWeight: "400",
  fontSize: "13px",
};

const TableRowStyled = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #EFF5F5;
    height: 20px;
  }
  &:nth-of-type(even) {
    background-color: #D6E4E5;
  }
  & > td {
    color: red;
  } 
`;

const style = {
  fontSize: "18px",
  textAlign: "center",
  opacity: "0.8",
  color:"white",
  fontWeight:"400"
  // height:"60px"
};
export default function MachineTable({ data, role, handleClickOpen, handleSelectValues }) {
  return (
    <>
      {!data ? (
        <LinearProgress color="info" style={{ overflow: "hidden" }} />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableRow style={{background:"linear-gradient(90deg, rgba(58,180,115,1) 0%, rgba(29,192,253,1) 100%)"}}>
           
              <TableCell style={style}>
                Machine
              </TableCell>
              <TableCell style={style}>
                Physical Phenomena
              </TableCell>
              <TableCell style={style}>
                Phenomenon No
              </TableCell>
              <TableCell style={style}>
                Action Taken
              </TableCell>
              <TableCell style={style}>
                Bttery Pack ID
              </TableCell>
            </TableRow>
            <TableBody>
              {data.map((row, i) => {
                return role.machineToShow.map((val) => {
                  if (val === row.machine_id || role.roles === 1) {
                    return (
                      <TableRowStyled key={row.machine_name}>
                        <TableCell
                          component="th"
                          style={{ fontWeight: "400", fontSize: "13px" }}
                          scope="row"
                        >
                          {row.machine_name}
                        </TableCell>

                        <TableCell style={{ fontWeight: "400", fontSize: "13px" }}>
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
                              style={{ height: "40px", fontWeight: "400", fontSize: "13px" }}
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

                        <TableCell size="small" style={{ textAlign: "center", fontWeight: "200", fontSize:"13px",color:"black" }}>
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
                          <FormControl fullWidth disabled={row.value ? false : true}>
                            <InputLabel
                              style={{ height: "20px", }}
                              id="demo-simple-select-helper-label"
                            >
                               Action Taken
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
                                      <MenuItem key={val} style={{ fontWeight: "400" }} value={val}>
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
                          {!row.battery_pack_id ? (
                            <TextField
                              disabled={row.value ? false : true}
                              id="batter-pack-id"
                              label="Battery Pack ID"
                              variant="outlined"
                              onChange={(e) => (row.battery_pack_id = e.target.value)}
                            />
                          ) : (
                            <TextField
                              disabled={row.value ? false : true}
                              id="batter-pack-id"
                              label="Battery Pack ID"
                              variant="outlined"
                              onChange={(e) => (row.battery_pack_id = e.target.value)}
                            />
                          )}
                        </TableCell>
                      </TableRowStyled>
                    );
                  } else {
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
