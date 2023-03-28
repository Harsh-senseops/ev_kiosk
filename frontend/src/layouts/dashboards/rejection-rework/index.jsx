import React from "react";
import Grid from "@mui/material/Grid";
import "../physical-phenomena/pp.css";
import { useQuery,useMutation } from "urql";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
// import FullScreenDialog from "components/PPDilougeBar/PPDialog";
import MachineTable from "layouts/authentication/components/tables/MachineTables";
import { CardContent } from "@mui/material";
import FilterBasic from "layouts/dashboards/ev-dashboard/FilterBasic";
import { R_MACHINE_DATA,ADD_R_P_PHENOMENA_RECORDS,RP_PHENOMENA_LENGTH,ADD_R_PHYSICAL_PHENOMENA,ADD_R_ACTION_TAKEN } from "queries/allQueries";
import {useSelector,useDispatch} from "react-redux";
import alertAndLoaders from "util/alertAndLoaders";

function RejectionRework() {
    const [fromDilougeBar, setFromDilougeBar] = React.useState("");
    const [data1,setData] = React.useState("")
    const [index, setIndex] = React.useState(0);
    const [action, setAction] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [actionTakenValue, setActionTakenValue] = React.useState("");
    const [shouldPause,setShouldPause] = React.useState(true)
    const [rMachineData,rexecRmachineData] = useQuery({
        query:R_MACHINE_DATA,
        pause:shouldPause
    })
    const [rPPhenomenaLength, reExecRPhenomenaLength] = useQuery({
        query: RP_PHENOMENA_LENGTH,
      });
    const [updateRpRecordsResult,updateRpRecords] = useMutation(ADD_R_P_PHENOMENA_RECORDS);
    const [updateRPPResult,updateRPP] = useMutation(ADD_R_PHYSICAL_PHENOMENA);
    const [updateRPPActionTakenResult,updateRPPActionTaken] = useMutation(ADD_R_ACTION_TAKEN);
    const userRoleStore = useSelector((store)=>{  
        return store.userRoles
    })
    const dispatch = useDispatch();
    // const
    const {data,error,fetching} = rMachineData;

    const refresh = () => {
        // Refetch the query and skip the cache
        rexecRmachineData({ requestPolicy: "network-only" });
        reExecRPhenomenaLength({ requestPolicy: "network-only" });
        // reExecTodayspprReesults({ requestPolicy: "network-only" });
      };

    React.useEffect(() => {
        if (!data1) {
          setShouldPause(false);
        }
    
        if (data) {
          setData(data.getAllRejectionWorkMachineData);
          setShouldPause(true);
        }
      }, [data]);

      const handleSelectValues = (i, e, val) => {
        if (val === "pp") {
          let obj = [...data1];
          obj[i].value = e.target.value;
          obj[i].action_taken_value = "";
          setData(obj);
        } else {
          let obj = [...data1];
          obj[i].action_taken_value = e.target.value;
          setData(obj);
        }
      };
    
      const handleClickOpen = (i, add) => {
        let obj = [...data1];
        setIndex(i);
        setAction(add);
        setFromDilougeBar(add);
        if (add === "addActionTaken") {
          obj[index].physicalPhenomena.map((val) => {
            if (obj[index].value === val.phenomena_name) {
              alertAndLoaders("SHOW_ALERT", dispatch);
              updateRPPActionTaken({
                rpActionTakenId: val.phenomena_no,
                rActionTaken: actionTakenValue,
              }).then((result) => {
                if (result.error) {
                  alertAndLoaders("UNSHOW_ALERT", dispatch, "Error 404 Not Found", "error");
                  return;
                }
                alertAndLoaders("UNSHOW_ALERT", dispatch, "Action Taken added successfully", "success");
                refresh();
                setOpen(!open);
                return;
              });
            }
          });
        } else if (add === "addP_Phenomena") {
          let machineID = data1[i].machine_id;
          alertAndLoaders("SHOW_ALERT", dispatch);
          updateRPP({
            rpMachineId: machineID,
            rPhenomenaNo: rPPhenomenaLength.data.getRPhysicalPhenomenaLength.length + 1,
            rPhenomenaName: actionTakenValue,
          }).then((result) => {
            if (result.error) {
              alertAndLoaders("UNSHOW_ALERT", dispatch, "Error 404 Not Found", "error");
              console.log(result)
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
        setOpen(!open);
      };
    
      const pushData = () => {
        const arr = [];
        let i = 0;
        let isTrue = true;
        data1.map((val) => {
          if (val.value) {
            if (!val.action_taken_value) {
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
    
        if (!isTrue) {
          alertAndLoaders("Error duplicate values encountered", "error", dispatch);
          return;
        }
        arr.map((val) => {
          alertAndLoaders("SHOW_ALERT", dispatch);
          updateRpRecords({
            rMachine: val.machine,
            rPPhenomena: val.pPhenomena,
            rPhenomenaNo: val.phenomenaNo,
            rActionTaken: val.actionTaken,
            rBatteryPackId: val.batteryPackId,
          }).then((result) => {
            if (result.error) {
              alertAndLoaders("UNSHOW_ALERT", dispatch, "Error 404 Not Found", "error");
              return;
            }
            alertAndLoaders("UNSHOW_ALERT", dispatch, "Machine data added successfully", "success");
          });
        });
        refresh();
      };
  return (
    <>
      <Grid mt={2}>
        <Grid item xs={12} md={12}>
          <CardContent style={{ background: "#ffffff" }}>
            <FilterBasic onPress={pushData} />
          </CardContent>
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

export default RejectionRework;
