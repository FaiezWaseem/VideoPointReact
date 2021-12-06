import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Icon from '@mui/material/Icon';
import {useNavigate} from 'react-router-dom';

export default function SideBarList({setCallback}) {
  const history = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [ isHome , setActiveHome] = React.useState(true)
  const [ istrend , setActiveTrend] = React.useState(false)
  const [ isMyvideo , setActiveMyVideo] = React.useState(false)

function HandleSideBar (prop){
    if (prop ===  'home'){
        setActiveHome(true)
        setActiveTrend(false)
        setActiveMyVideo(false)
        setCallback(0)
    }else if (prop === 'trend'){
        setActiveHome(false)
        setActiveTrend(true)
        setActiveMyVideo(false)
        setCallback(1)
      }else{
        setActiveHome(false)
        setActiveTrend(false)
        setActiveMyVideo(true)
        setCallback(2)
      }
}
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >
      <ListItemButton  onClick={()=>{HandleSideBar('home')}}  style={{ background :  isHome ?  "rgba(251, 126, 130 ,0.2)" : '#fff' }} >
        <ListItemIcon>
        <Icon  style={{color : isHome ?  "#fa6165" : 'black' }}>home</Icon>
        </ListItemIcon>
        <ListItemText primary="Home"  />
      </ListItemButton>

      <ListItemButton onClick={()=>{HandleSideBar('trend')}}  style={{ background :  istrend ?  "rgba(251, 126, 130 ,0.2)" : '#fff' }} >
        <ListItemIcon>
        <Icon style={{color : istrend ?  "#fa6165" : 'black' }}>local_fire_department</Icon>
        </ListItemIcon>
        <ListItemText primary="Trend" />
      </ListItemButton>
      <ListItemButton  onClick={()=>{HandleSideBar('myvideos')}}  style={{ background :  isMyvideo ?  "rgba(251, 126, 130 ,0.2)" : '#fff' }}>
        <ListItemIcon>
        <Icon style={{color : isMyvideo ?  "#fa6165" : 'black' }}>subscriptions</Icon>
        </ListItemIcon>
        <ListItemText primary="MyVideos" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Explore" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Icon>hub</Icon>
            </ListItemIcon>
            <ListItemText primary="Comedy" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Icon>hub</Icon>
            </ListItemIcon>
            <ListItemText primary="Love" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Icon>hub</Icon>
            </ListItemIcon>
            <ListItemText primary="Gaming" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Icon>hub</Icon>
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Icon>hub</Icon>
            </ListItemIcon>
            <ListItemText primary="Movie" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            <Icon>hub</Icon>
            </ListItemIcon>
            <ListItemText primary="Sad" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton  onClick={()=> {history('/Authentication/signin/')}}>
        <ListItemIcon>
        <Icon>logout</Icon>
        </ListItemIcon>
        <ListItemText primary="SignIn" />
      </ListItemButton>
    </List>
  );
}
