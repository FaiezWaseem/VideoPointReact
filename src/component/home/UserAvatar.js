import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import database from "../../Backend/Fire"




export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState({
    name : "F",
    profile : "null"
  });
  const open = Boolean(anchorEl);
React.useEffect(()=>{
  database.once("users/"+database.getUid() , (snap)=>{
    setUser({
      name : snap.val().name,
      profile : snap.val().profile
    })
  })
},[])

  
  const [on , setOn] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
React.useEffect(()=>{
  initTheme();
},[on])

function initTheme() {
    var darkThemeSelected = localStorage.getItem("darkSwitch") !== null && localStorage.getItem("darkSwitch") === "dark";
    darkThemeSelected ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme")
    darkThemeSelected ? setOn(true) : setOn(false)
  }
function resetTheme(val) {
    if (!val) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark")
    } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch")
    }
}
  function Darkmode(){
    setOn(!on)
    resetTheme(on)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>{user.name.charAt(0)}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
         <img  src={user.profile}  style={{ width : 40 , height : 40 , borderRadius : 50 , marginRight : 8}} />
          {user.name}
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
          <label class="switch">
          <input type="checkbox" id="darkSwitch" checked={on} onChange={()=>{Darkmode()}} />
            <span class="slider round"></span>
          </label>
          </ListItemIcon>
            DarkMode
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}


