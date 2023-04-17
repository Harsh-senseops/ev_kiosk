import { Grid } from "@mui/material";
// import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import React, { useState } from "react";
import typography from "assets/theme/base/typography";
import { useQuery } from "urql";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import * as action from "../../../../reduxSlices/table";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import LinearProgress from "@mui/material/LinearProgress";
import { FIND_PRODUCTION_BY_SHIFT } from "queries/allQueries";
import styled from "@emotion/styled";

const tableRowStyle = {
  fontSize:"16px",
  opacity:"0.7.8",
  color:"white",
  fontWeight:"400"
}

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

function PlannedProductionTable() {
  const [columns, setColumns] = useState([
    { title: "Zone", field: "zone", editable: "never" },
    { title: "Planned Production Count", field: "field" },
  ]);

  const store = useSelector((store) => {
    return store.table;
  });

  const alertStore = useSelector((store) => {
    return store.alert;
  });

  const userRoleStore = useSelector((store)=>{
    return store.userRoles;
  })

  const dispatch = useDispatch();

  const [show, setShow] = useState([false, false, false, false]);

  let [data, setData] = useState([
    { zone: "Zone 1", field: "N/A", id: 1, dbId: 0, isEdited: false },
    { zone: "Zone 2", field: "N/A", id: 2, dbId: 0, isEdited: false },
    { zone: "Zone 3.1", field: "N/A", id: 3, dbId: 0, isEdited: false },
    { zone: "Zone 3.2", field: "N/A", id: 4, dbId: 0, isEdited: false },
  ]);
  //For setting the input values if deleted this code, the input values will not get changed.
  const obj = [
    {
      zone: data[0].zone,
      field: data[0].field,
      id: data[0].id,
      dbId: data[0].dbId,
    },
    {
      zone: data[1].zone,
      field: data[1].field,
      id: data[1].id,
      dbId: data[1].dbId,
    },
    {
      zone: data[2].zone,
      field: data[2].field,
      id: data[2].id,
      dbId: data[2].dbId,
    },
    {
      zone: data[3].zone,
      field: data[3].field,
      id: data[3].id,
      dbId: data[3].dbId,
    },
  ];
  //query to find the production count by shifts
  const [result, reExecuteQuery] = useQuery({
    query: FIND_PRODUCTION_BY_SHIFT,
    variables: { shift: store.shift },
  });

  //resposible for showing inputs when edit button is clicked
  const showInput = (index) => {
    let newArray = [...show];
    newArray[index] = show[index] ? false : true;
    setShow(newArray);
  };

  //resposible for holding input value when check mark is clicked
  const correctInput = (index, e) => {
    let obj1 = [...data];
    obj1[index].field = e.target.value;
    setData(obj1);
  };

  //resposible for cannelling the input value.
  const cancelInput = (index) => {
    let newArray = [false, false, false, false];
    newArray[index] = show[index] ? false : true;
    setShow(newArray);
    let obj1 = [...data];
    obj1[index].field = "N/A";
    setData(obj1);
  };

  //resposible for fetching todays production count based on shifts and setting to the table when shift dropdown is changed.
  async function checkTodaysData() {
    let obj = [
      { zone: "Zone 1", field: "N/A", id: 1, dbId: 0 },
      { zone: "Zone 2", field: "N/A", id: 2, dbId: 0 },
      { zone: "Zone 3.1", field: "N/A", id: 3, dbId: 0 },
      { zone: "Zone 3.2", field: "N/A", id: 4, dbId: 0 },
    ];
    try {
      if (result.data.findProductionByShift.length > 4) {
        console.log("Omg it shouldnot have happned");
      }
      let toSortResultData = [...result.data.findProductionByShift];
      toSortResultData.sort((a, b) => {
        return a.Zone - b.Zone;
      });
      obj.map((val1) => {
        toSortResultData.map((val2, index) => {
          if (val1.id === val2.Zone) {
            val1.field = val2.ProductionCount;
            val1.dbId = val2.Id;
          }
        });
      });
    } catch (err) {
      return err;
    }

    if (store.executeQuery) {
      reExecuteQuery({ requestPolicy: "network-only" });
      setTimeout(() => {
        dispatch(action.setExecuteQuery(false));
      }, 2000);
      // refresh()
      // dispatch(action.setExecuteQuery(false));
    }
    setData(obj);
    console.log("iRan")
  }

  React.useEffect(() => {
    checkTodaysData();
  }, [result.data, store.executeQuery,store.shift]);

  React.useEffect(()=>{
    reExecuteQuery({ requestPolicy: "network-only" });
  },[store.shift])

  React.useEffect(() => {
    dispatch(action.setProductionCount(obj));
  }, [data]);

  React.useEffect(() => {
    dispatch(action.setShift("Shift 1"));
  }, []);

  return (
    <>
      {alertStore.loader ? <LinearProgress color="success" style={{ overflow: "hidden" }} /> : ""}
      <Grid mt={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableRow style={{background:"linear-gradient(90deg, rgba(58,180,115,1) 0%, rgba(29,192,253,1) 100%)"}}>
              <TableCell style={tableRowStyle}>
                Zone
              </TableCell>
              <TableCell style={tableRowStyle}>
                Planned Production Count
              </TableCell >
             <TableCell align="right" style={tableRowStyle}>
                Actions
              </TableCell>
            </TableRow>

            <TableBody>
              {data.map((row, i) => (
                <TableRowStyled
                  key={row.zone}
                  // sx={{ "&:nth-of-type(odd)": { backgroundColor: "#ECF2FF" } }}
                >
                  <TableCell style={{fontWeight:"400",opacity:"0.8",fontSize:"14px"}} component="th" scope="row">
                    {row.zone}
                  </TableCell>
                  <TableCell style={{fontWeight:"400",opacity:"0.8",fontSize:"14px"}} component="th" scope="row">
                    {show[i] ? (
                      <TextField
                        id="outlined-password-input"
                        label="Production Count"
                        type="number"
                        sx={{ width: "100%" }}
                        value={row.field}
                        onChange={(e) => correctInput(i, e)}
                      />
                    ) : (
                      row.field
                    )}
                  </TableCell>
                 <TableCell component="th" scope="row" align="right">
                    {!show[i] ? (
                      <IconButton onClick={() => showInput(i)} aria-label="delete">
                        <CreateIcon />
                      </IconButton>
                    ) : (
                      <>
                        <IconButton onClick={() => showInput(i)}>
                          <CheckIcon />
                        </IconButton>{" "}
                        <IconButton onClick={() => cancelInput(i)}>
                          <ClearIcon />
                        </IconButton>
                      </>
                    )}
                  </TableCell>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
export default PlannedProductionTable;
