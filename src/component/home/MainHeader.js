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
<nav className="navbar navbar-expand-lg navbar-light  mt-2"  >
    <div className="container-fluid">
        <a href="#" className="navbar-brand" style={{color :"#fa6165" , fontWeight : 'bolder'}}>Video Point</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav">
                <a onClick={()=>{history('/')}} style={{cursor : 'pointer'}} className="nav-item nav-link active" >Home</a>
                <a href="#" className="nav-item nav-link active" >About Us</a>
            </div>
            <form className="d-flex">
                <div className="input-group">                    
                    <input type="text" className="form-control" placeholder="Search" />
                    <button type="button" className="btn btn-secondary"><Icon fontSize='small'>search</Icon></button>
                </div>
            </form>
            <div className="navbar-nav">
            {
                isLogin ? <AccountMenu /> :<Button variant="outlined" onClick={()=>history('/Authentication/signin/')} style={{ border : '1px solid #fa6165' , color : '#fa6165' , fontWeight : "bold"}} startIcon={<Icon>login</Icon>}>
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



