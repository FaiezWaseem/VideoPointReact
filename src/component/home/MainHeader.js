import React from 'react'
import '../../styles/home/header.css'
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import AccountMenu from './UserAvatar'
import {useNavigate} from 'react-router-dom';
import database from "../../Backend/Fire"

export default function MainHeader() {
    const history = useNavigate()
const [isLogin , setLogin]  = React.useState(false);
React.useEffect(()=>{
    database.isAuthenticated((user)=>{
        if(user){
            setLogin(true)
        }else{
           setLogin(false)
        }
    })
},[])

    return (
      <>
<nav class="navbar navbar-expand-lg navbar-light  mt-2"  >
    <div class="container-fluid">
        <a href="#" class="navbar-brand" style={{color :"#fa6165" , fontWeight : 'bolder'}}>Video Point</a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav">
                <a onClick={()=>{history('/')}} style={{cursor : 'pointer'}} class="nav-item nav-link active" >Home</a>
                <a href="#" class="nav-item nav-link active" >About Us</a>
            </div>
            <form class="d-flex">
                <div class="input-group">                    
                    <input type="text" class="form-control" placeholder="Search" />
                    <button type="button" class="btn btn-secondary"><Icon fontSize='small'>search</Icon></button>
                </div>
            </form>
            <div class="navbar-nav">
            {
                isLogin ? <AccountMenu /> :<Button variant="outlined" style={{ border : '1px solid #fa6165' , color : '#fa6165' , fontWeight : "bold"}} startIcon={<Icon>login</Icon>}>
  Login
</Button>
            }
                
            </div>
        </div>
    </div>
</nav>

      </>
    )
}



