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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : theme.palette.success.light,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary
}));

export default function Stack5(stackID, zone) {

  console.log("Data in stack view", stackID, zone)

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0.5} mb={1}>
      <Grid item xs={0.7}>
        <Fab size="small" color="success" aria-label="add">
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
        <MDButton color="white" size="small">View Stack 1</MDButton>
      </Grid>
    </Grid>
  </Box>
  );
}

