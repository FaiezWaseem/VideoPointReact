import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import Icon from '@mui/material/Icon';


export default function FixedBottomNavigation({setCallback}) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, []);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            setCallback(newValue)
          }}
        >
          <BottomNavigationAction label="Home"  style={{color : value === 0 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }} icon={<Icon  style={{color : value === 0 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }}>home</Icon>} />
          <BottomNavigationAction label="Trend"  style={{color : value === 1 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }} icon={<Icon  style={{color : value === 1 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }}>local_fire_department</Icon>} />
          <BottomNavigationAction label="Myvideos"  style={{color : value === 2 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }} icon={<Icon  style={{color : value === 2 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }}>subscriptions</Icon>} />
          <BottomNavigationAction label="Explore"  style={{color : value === 3 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }} icon={<Icon  style={{color : value === 3 ?  "#fa6165" : 'rgba(0, 0, 0, 0.6)' }}>hub</Icon>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
