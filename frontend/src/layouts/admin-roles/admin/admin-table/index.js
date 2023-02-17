import { Grid } from "@mui/material";
import MaterialTable from "material-table";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { useState } from 'react';
import EditableTable from "examples/Tables/EditableTable";
import typography from "assets/theme/base/typography";

function AdminTable() {

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

  const [columns, setColumns] =  useState([
    { title: 'LOGIN', field: 'login'},
    { title: 'EMAIL', field: 'email'},
    { title: 'NAME', field: 'name'},
    { title: 'ROLE', field: 'role', lookup: { 1: 'Admin', 2: 'Operator', 3: 'Super User' },}    
  ])

  const [data, setData] = useState([
    { login: 'Admin', email: 'admin@gmail.com', name: 'Admin', role: 'Admin' },
])

  return (
      <Grid mt={2}>
        <ThemeProvider theme={theme}>
       <MaterialTable
        title="User Roles"
        columns={columns}    
        data={data}
        options={{
          headerStyle: {
            // backgroundColor: '#555555',
            // backgroundColor: '#ffa000',
            color: '#7b809b',
            fontWeight: 'bold',
            height: 10,
          },
          actionsColumnIndex: -1,
        //   pageSize: rowsPerPage,
        //   pageSizeOptions: rowsPerPage,
        //   exportButton: true,
          rowStyle: rowData => ({
            // backgroundColor: (rowData.tableData.id % 2 === 1) ? '#F7F7F7' : '#FFF',
            fontSize: '1.02rem',
            color: '#7b809b'
          })
        }}
        editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                  resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
    
                  resolve();
                }, 1000)
              }),
          }}
      />
      </ThemeProvider>
   </Grid>
  )
}
export default AdminTable