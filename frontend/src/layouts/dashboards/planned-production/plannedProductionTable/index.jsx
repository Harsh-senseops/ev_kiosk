import { Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
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

  const dispatch = useDispatch();

  const [show, setShow] = useState([false, false, false, false]);

  let [data, setData] = useState([
    { zone: "Zone 1", field: "", id: 1, dbId: 0, isEdited: false },
    { zone: "Zone 2", field: "", id: 2, dbId: 0, isEdited: false },
    { zone: "Zone 3.1", field: "", id: 3, dbId: 0, isEdited: false },
    { zone: "Zone 3.2", field: "", id: 4, dbId: 0, isEdited: false },
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
    obj1[index].field = "";
    setData(obj1);
  };

  //resposible for fetching todays production count based on shifts and setting to the table when shift is drop down is changed.
  async function checkTodaysData() {
    let obj = [
      { zone: "Zone 1", field: "", id: 1, dbId: 0 },
      { zone: "Zone 2", field: "", id: 2, dbId: 0 },
      { zone: "Zone 3.1", field: "", id: 3, dbId: 0 },
      { zone: "Zone 3.2", field: "", id: 4, dbId: 0 },
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

    if(store.executeQuery){
      reExecuteQuery({ requestPolicy: 'network-only' });
       setTimeout(()=>{
      dispatch(action.setExecuteQuery(false))
    },2000)
    }
    setData(obj);
  }

  React.useEffect(() => {
    checkTodaysData();
  }, [result.data, store.shift, alertStore.showAlert,]);

  React.useEffect(() => {
    dispatch(action.setProductionCount(obj));
  }, [data]);

  const theme = createTheme({
    palette: {
      typography: {
        fontFamily: typography.fontFamily,
        fontSize: 4,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
      },
    },
  });

  return (
    <>
      {alertStore.loader ? <LinearProgress color="success" style={{ overflow: "hidden" }} /> : ""}
      <Grid mt={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableRow>
              <TableCell>
                <b>Zone</b>
              </TableCell>
              <TableCell>
                <b>Planned Production Count</b>
              </TableCell>
              <TableCell align="right">
                <b>Actions</b>
              </TableCell>
            </TableRow>

            <TableBody>
              {data.map((row, i) => (
                <TableRow key={row.zone} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.zone}
                  </TableCell>
                  <TableCell component="th" scope="row">
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
export default PlannedProductionTable;
