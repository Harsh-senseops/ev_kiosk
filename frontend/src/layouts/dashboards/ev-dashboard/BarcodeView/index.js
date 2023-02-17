import { Grid } from "@mui/material";
import MaterialTable from "material-table";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { useState } from 'react';
import EditableTable from "examples/Tables/EditableTable";
import typography from "assets/theme/base/typography";
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

function BarcodeView(props) {
  const [formtitle, setFormtitle] = useState(null)

  //passing selected barcode to parent component i.e 
  props.func(formtitle, "batteryBarcode");

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
    { title: 'Barcode', field: 'barcode'}, 
  ])

  const [data, setData] = useState([
    { barcode: 'NL6318100A3C' },
    { barcode: 'NL6318100A4C' },
    { barcode: 'NL6318100A5C' },
    { barcode: 'NL6318100A6C' },
    { barcode: 'NL6318100A7C' },
    { barcode: 'NL6318100A8C' },
    { barcode: 'NL6318100A9C' },
    { barcode: 'NL6318100A0C' },
    { barcode: 'NL6318100A1D' },
])

const handleEdit = (rowdata) => {
    // console.log(rowdata.barcode)
    setFormtitle(rowdata.barcode)
    // setTableWidth(30)
    // setDetailsOpen(true)
  }

  return (
      <Grid mt={2}>
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
        actions={[
            {   
                icon: () => <VisibilityIcon style={{ color: "#73777B", width: "80%" }} />,
                tooltip: 'View Data',
                onClick: (event, rowdata) => {handleEdit(rowdata)}
                // onClick: (event, rowdata) => {console.log("Rowdata",rowdata)}
            }
        ]}
        // editable={{
        //     onRowUpdate: (newData, oldData) =>
        //       new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //           const dataUpdate = [...data];
        //           const index = oldData.tableData.id;
        //           dataUpdate[index] = newData;
        //           setData([...dataUpdate]);
        //           resolve();
        //         }, 1000)
        //       }),
        //   }}
      />
      </ThemeProvider>
   </Grid>
  )
}
export default BarcodeView