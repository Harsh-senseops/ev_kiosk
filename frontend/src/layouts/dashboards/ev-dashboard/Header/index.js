import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import BarcodeView from '../BarcodeView';

import MDTypography from 'components/MDTypography';

const StackBarcode = ['NL6318100A4C', 'NL6318100A5C', 'NL6318100A6C', 'NL6318100A7C', 'NL6318100A8C', 'NL6318100A9C', 'NL6318100A0C', 'NL6318100A1D', 'NL6318100A2D']

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);
  const [currentStackBarcode, setCurrentBarcode] = React.useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD i.e BarcodeView
    setCurrentBarcode(data)
  }

  currentStackBarcode ? props.func1(currentStackBarcode) : null
  

  return (
    <Box sx={{ width: '100%' }}>
            <BarcodeView func={pull_data} />           
    </Box>
  );
}