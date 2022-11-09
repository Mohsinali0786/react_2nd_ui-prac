import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 600 }, bgcolor: '#c0c0c000'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Natural 1" />
        <Tab label="Natural 2" />
        <Tab label="Natural 3" />
        <Tab label="Natural 4" />
        <Tab label="Natural 5" />
        <Tab label="Natural 6" />
        <Tab label="Natural 7" />
      </Tabs>
    </Box>
  );
}