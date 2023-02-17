import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MDButton from 'components/MDButton';
import MaterialTable from "material-table";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import typography from "assets/theme/base/typography";
import { useState } from 'react';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import dataTableData from 'layouts/applications/data-tables/data/dataTableData';
import DataTable from "examples/Tables/DataTable";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : theme.palette.success.light,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary
}));

export default function Stack1(stackID, zone) {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [cellData, setCellData] = useState()
    
  console.log("Data in stack view", stackID, zone)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFabClick = (e) => {
    setCellData("L9FDUBG139N4048169")
  }

  console.log("Dialog state", open)

  console.log("Cell data", cellData)

  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0.5} mb={1}>
      <Grid item xs={0.7}>
        <Fab size="small" 
          color="success"
          aria-label="add" 
          onClick={e => handleFabClick(e)}>
            <MDTypography variant="button" fontWeight="medium" color="white">1a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">2a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">3a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">4a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
        <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">5a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">6a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">14a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">7a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
        <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">8a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">9a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">10a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">11a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">12a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={0.7}>
      <Fab size="small" color="success" aria-label="add">
            <MDTypography variant="button" fontWeight="medium" color="white">13a</MDTypography>
        </Fab>
      </Grid>
      <Grid item xs={2.2} mt={0.5}>
        <MDButton color="white" size="small" onClick={handleClickOpen}>View Stack 1</MDButton>
      </Grid>
    </Grid>
  </Box>
    <Dialog onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} fullScreen={fullScreen}
        maxWidth="xl">
        <DialogContent>
        <Card>
          <MDBox p={3} lineHeight={1}>
            <MDTypography variant="h5" fontWeight="medium">
              Stack Data: Layer 1
            </MDTypography>
            {/* <MDTypography variant="button" color="text">
              A lightweight, extendable, dependency-free javascript HTML table plugin.
            </MDTypography> */}
          </MDBox>
          <DataTable table={dataTableData} canSearch />
        </Card>
        </DialogContent>
    </Dialog>
  </React.Fragment>
  );
}

