import React from 'react'
import MainHeader from '../component/home/MainHeader'
import FixedBottomNavigation from '../component/home/BottomNavifation'
import Panel from '../component/home/mainPanel'

export default function Home() {
    const [ismobile , setMobile] = React.useState(false)
    const [currentScreen , setcurrentScreen] = React.useState(0)

    window.addEventListener('resize' , function(e){
    (window.innerWidth < 768) ? setMobile(true) :setMobile(false) }) 
React.useEffect(()=>{
    if(window.innerWidth < 768){
        setMobile(true)
    }
} , [])
    return (
        <div>
         <div className="container">
         <MainHeader /> 
          </div>
           <Panel currentPage={currentScreen} />
           {
               ismobile ? <FixedBottomNavigation setCallback={(val)=>{setcurrentScreen(val)}} /> : <></>
           }
           
        </div>
    )
}
