import { Grid } from "@mui/material";
import MaterialTable from "material-table";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import React, { useState } from 'react';
import typography from "assets/theme/base/typography";
import { useQuery } from "urql";
import { useDispatch } from "react-redux"; 
import * as action from "../../../../reduxSlices/table";

const todaysProductionCount = `
query GetTodayProductionCount {
  getTodayProductionCount {
    Date
    ProductionCount
    Shift
    Zone
  }
}
`;
function PlannedProductionTable() {
  const [columns, setColumns] =  useState([
    { title: 'Zone', field: 'zone', editable: 'never'}, 
    { title: 'Planned Production Count', field: 'field'}
  ])
  const dispatch = useDispatch();
  let [data,setData] = useState([
    { zone: "Zone 1", field: "12"  , id: 1 },
    { zone: "Zone 2", field:"12", id: 2 },
    { zone: "Zone 3.1", field: "", id: 3 },
    { zone: "Zone 3.2", field: "", id: 4 },
  ])

  const obj = [
    {zone:data[0].zone,field:data[0].field,id:data[0].id},
    {zone:data[1].zone,field:data[1].field,id:data[1].id},
    {zone:data[2].zone,field:data[2].field,id:data[2].id},
    {zone:data[3].zone,field:data[3].field,id:data[3].id},

  ]

    const [result,reExecuteQuery] = useQuery({
      query:todaysProductionCount,
      // pause: false,
    })


  // console.log(result)

 
    
  const theme = createTheme({
    palette: {
      // primary: {
      //   main: '#4caf50',
      // },
      // secondary: {
      //   main: '#ff9100',
      // },
      typography: {
        "fontFamily": typography.fontFamily,
        "fontSize": 4,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       }
    },
  });


console.log("I ran from planned prod child")

// const handleEdit = (rowdata) => {
//     // console.log(rowdata.barcode)
//     setFormtitle(rowdata.barcode)
//     // setTableWidth(30)
//     // setDetailsOpen(true)
//   }
async function checkTodaysData () {
    if(!result.data){ 
     setData(data)
     return 
    }
    await result.data.getTodayProductionCount.sort((a,b)=>{
     return a.Zone - b.Zone; 
    })

    let newReuslt =  [
      { zone: "Zone 1", field: result.data.getTodayProductionCount[0] ? result.data.getTodayProductionCount[0].ProductionCount :""  , id: 1 },
      { zone: "Zone 2", field: result.data.getTodayProductionCount[1] ? result.data.getTodayProductionCount[1].ProductionCount :"", id: 2 },
      { zone: "Zone 3.1", field: result.data.getTodayProductionCount[2] ? result.data.getTodayProductionCount[2].ProductionCount :"", id: 3 },
      { zone: "Zone 3.2", field: result.data.getTodayProductionCount[3] ? result.data.getTodayProductionCount[3].ProductionCount :"", id: 4 },
    ]

    setData(newReuslt)
  }

  React.useEffect(()=>{
    checkTodaysData()
  },[result])

  React.useEffect(()=>{
    dispatch(action.setProductionCount(obj))
  },[data])

  // console.log(checkTodaysData())

  return (
      <Grid mt={2}>
        {/* {JSON.stringify(result.data)} */}
        <ThemeProvider theme={theme}>
       <MaterialTable
        title="User Roles"
        columns={columns}    
        data={data}
        options={{
          toolbar: false,
          headerStyle: {
            // backgroundColor: '#555555',
            // backgroundColor: '#ffa000',
            color: '#7b809b',
            fontWeight: 'bold',
            height: 10,
          },
          paging: false,
          actionsColumnIndex: -1,
        //   pageSize: rowsPerPage,
        //   pageSizeOptions: rowsPerPage,
        //   exportButton: true,
          rowStyle: rowData => ({
            // backgroundColor: (rowData.tableData.id % 2 === 1) ? '#F7F7F7' : '#FFF',
            fontSize: '0.8rem',
            color: '#7b809b'
          })
        }}
        // actions={[
        //     {   
        //         icon: () => <VisibilityIcon style={{ color: "#73777B", width: "80%" }} />,
        //         tooltip: 'View Data',
        //         onClick: (event, rowdata) => {handleEdit(rowdata)}
        //         // onClick: (event, rowdata) => {console.log("Rowdata",rowdata)}
        //     }
        // ]}
        editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                  resolve();
                }, 100)
              }),
          }}
      />
      </ThemeProvider>
   </Grid>
  )
}
export default PlannedProductionTable;