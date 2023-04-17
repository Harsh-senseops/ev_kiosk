import React from "react";
import Grid from "@mui/material/Grid";
import "../pp.css";
import { useQuery } from "urql";
import TextField from "@mui/material/TextField";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { useMutation } from "urql";
import { useSelector } from "react-redux";
import {
  ADD_PHYSICAL_PHENOMEA_TABLE,
  ADD_MACHINE_RECORDS,
  P_PHENOMENA_LENGTH,
  MACHINE_DATA,
  ADD_ACTION_TABLE,
  TODAYS_PP_RECORDS,
} from "queries/allQueries";
// import FullScreenDialog from "components/PPDilougeBar/PPDialog";
import { useDispatch } from "react-redux";
import alertAndLoaders from "util/alertAndLoaders";
import MachineTable from "components/tables/MachineTables";
import { CardContent } from "@mui/material";
import FilterBasic from "layouts/dashboards/ev-dashboard/FilterBasic";

const style = {
  color: "#ecf2ff",
  textAlign: "center",
};

function PhysicalPhenomenaTable() {
  const [shouldPause, setShouldPause] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [data1, setData] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }
  const [machineDataResult, reExecMachineDataResult] = useQuery({
    query: MACHINE_DATA,
    pause: shouldPause,
  });
  const dispatch = useDispatch();
  const [pPhenomenaLength, reExecPhenomenaLength] = useQuery({
    query: P_PHENOMENA_LENGTH,
  });
  const [todayspprResults, reExecTodayspprReesults] = useQuery({
    query: TODAYS_PP_RECORDS,
    pause: shouldPause,
  });
  const [fromDilougeBar, setFromDilougeBar] = React.useState("");
  const userRoleStore = useSelector((store) => {
    return store.userRoles;
  });
  const refresh = () => {
    // Refetch the query and skip the cache
    reExecMachineDataResult({ requestPolicy: "network-only" });
    reExecPhenomenaLength({ requestPolicy: "network-only" });
    reExecTodayspprReesults({ requestPolicy: "network-only" });
  };
  const [action, setAction] = React.useState("");
  const [updatedActionTakenResult, updateActionTaken] = useMutation(ADD_ACTION_TABLE);
  const [updatedPhysicalPhenomenaResult, updatePhysicalPhenomena] = useMutation(
    ADD_PHYSICAL_PHENOMEA_TABLE
  );
  const [updatedMachineRecordsResult, updateMachineRecords] = useMutation(ADD_MACHINE_RECORDS);
  const [actionTakenValue, setActionTakenValue] = React.useState("");
  const { data, fetching, error } = machineDataResult;
  // const MemoizedMachineTable = React.memo(MachineTable);

  React.useEffect(() => {
    if (!data1) {
      setShouldPause(false);
    }

    if (data) {
      setData(data.getAllMachineData);
      setShouldPause(true);
    }
  }, [data]);

  const handleSelectValues = (i, e, val) => {
    if (val === "pp") {
      // let obj = [...data1];
      // obj[i].value = e.target.value;
      // obj[i].action_taken_value = "";
      // setData(obj);
      setData(prevData => {
        const newData = [...prevData];
        newData[i].value = e.target.value;
        newData[i].action_taken_value = "";
        return newData;
      });
    } else {
      // let obj = [...data1];
      // obj[i].action_taken_value = e.target.value;
      // setData(obj);
      setData(prevData => {
        const newData = [...prevData];
        // newData[i].value = e.target.value;
        newData[i].action_taken_value = e.target.value;
        return newData;
      });
    }
  };

  const handleClickOpen = React.useCallback(
    (i, add) => {
      console.log("Iran from handle click")
      setOpen(!open);
      let obj = [...data1];
      setIndex(i);
      setAction(add);
      setFromDilougeBar(add);
      if (add === "addActionTaken") {
        if (actionTakenValue === "") {
          alertAndLoaders("UNSHOW_ALERT", dispatch, "Values cannot be empty", "warning");
          return;
        }
        obj[index].physicalPhenomena.map((val) => {
          if (obj[index].value === val.phenomena_name) {
            alertAndLoaders("SHOW_ALERT", dispatch);
            updateActionTaken({
              pActionTakenId: val.phenomena_no,
              actionTaken: actionTakenValue,
            }).then((result) => {
              if (result.error) {
                alertAndLoaders("UNSHOW_ALERT", dispatch, "Error 404 Not Found", "error");
                return;
              }
              alertAndLoaders(
                "UNSHOW_ALERT",
                dispatch,
                "Action Taken added successfully",
                "success"
              );
              refresh();
              setOpen(!open);
              return;
            });
          }
        });
      } else if (add === "addP_Phenomena") {
        if (actionTakenValue === "") {
          alertAndLoaders("UNSHOW_ALERT", dispatch, "Values cannot be empty", "warning");
          // setOpen(!open);
          return;
        }
        alertAndLoaders("SHOW_ALERT", dispatch);
        updatePhysicalPhenomena({
          pMachineId: index + 1,
          phenomenaNo: pPhenomenaLength.data.getPhysicalPhenomenaLength.length + 1,
          phenomenaName: actionTakenValue,
        }).then((result) => {
          if (result.error) {
            alertAndLoaders("UNSHOW_ALERT", dispatch, "Error 404 Not Found", "error");
            return;
          }
          alertAndLoaders(
            "UNSHOW_ALERT",
            dispatch,
            "Physical Phenomena added sucessfully",
            "success"
          );
          refresh();
          setOpen(!open);
          return;
        });
      }
    },
    [open]
  );
  console.log("Iran from ppparent")
  const pushData = () => {
    console.log("Iran from pushdata")
    const arr = [];
    let i = 0;
    let isTrue = true;
    data1.map((val) => {
      if (val.value) {
        if (!val.action_taken_value || val.battery_pack_id === "") {
          isTrue = false;
          return;
        }
        val.physicalPhenomena.map((val2) => {
          if (val2.phenomena_name === val.value) {
            arr.push({
              machine: val.machine_name,
              pPhenomena: val.value,
              phenomenaNo: val2.phenomena_no,
              actionTaken: val.action_taken_value,
              batteryPackId: val.battery_pack_id,
            });
          }
        });
      }
    });

    // if (todayspprResults.data) {
    //   todayspprResults.data.getTodaysPhysicalPhenomena.map((todaysVal) => {
    //     arr.map((arrVal) => {
    //       if (
    //         todaysVal.phenomena_no === arrVal.phenomenaNo &&
    //         todaysVal.action_taken === arrVal.actionTaken
    //       ) {
    //         isTrue = false;
    //         return;
    //       }
    //     });
    //   });
    // }

    if (!isTrue || arr.length === 0) {
      alertAndLoaders("UNSHOW_ALERT", dispatch, "Please select appropriate values", "warning");
      return;
    }

    arr.map((val) => {
      alertAndLoaders("SHOW_ALERT", dispatch);
      updateMachineRecords({
        machine: val.machine,
        pPhenomena: val.pPhenomena,
        phenomenaNo: val.phenomenaNo,
        actionTaken: val.actionTaken,
        batteryPackeId: val.batteryPackId,
      }).then((result) => {
        if (result.error) {
          alertAndLoaders("UNSHOW_ALERT", dispatch, "Error 404 Not Found", "error");
          return;
        }
        alertAndLoaders("UNSHOW_ALERT", dispatch, "Machine data added successfully", "success");
        refresh();
      });
    });
    refresh();
    
  };
  return (
    <>
      <Grid mt={2}>
        <Grid item xs={12} md={12} mb={2}>
          <FilterBasic onPress={pushData} />
        </Grid>
        <MachineTable
          data={data1}
          role={userRoleStore}
          handleClickOpen={handleClickOpen}
          handleSelectValues={handleSelectValues}
        />
        <Dialog fullWidth="true" maxWidth="sm" open={open} onClose={handleClickOpen}>
          <DialogTitle>
            {fromDilougeBar === "Physical Phenomena" ? "Physical Phenomena" : "Action Taken"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {fromDilougeBar === "Physical Phenomena"
                ? "Add Physical Phenomena"
                : "Add Action Taken"}
            </DialogContentText>
            <TextField
              onChange={(e) => setActionTakenValue(e.target.value)}
              autoFocus
              margin="dense"
              id="name"
              label={
                fromDilougeBar === "Physical Phenomena"
                  ? "Add Physical Phenomena"
                  : "Add Action Taken"
              }
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickOpen}>Cancel</Button>
            <Button
              onClick={() =>
                handleClickOpen(
                  index,
                  fromDilougeBar === "Physical Phenomena" ? "addP_Phenomena" : "addActionTaken"
                )
              }
            >
              ADD
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
}

export default PhysicalPhenomenaTable;