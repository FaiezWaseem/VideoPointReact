import * as React from 'react';
import '../../styles/home/mainpanel.css'
import SideBarList from './SideBarList'
import SkeletonLoading from '../Skeleton/SkeletonLoading' 
import VideoCard from './VideoCard'
import database from "../../Backend/Fire"
export default function Panel({currentPage}){
   const [screen , setScreen] = React.useState(currentPage);
   const [isLoaded , setLoaded  ] = React.useState(false);
   const [video , setVideos  ] = React.useState([]);

React.useEffect(()=>{
     database.on("video/all/" , (snap)=>{
         setVideos(item =>{
             return [
                 snap.val(),
                 ...item
             ]
         })
         setLoaded(true);
     })
},[])

function showLoading(){
   return (
 <>
     <SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading />
 </>
   )
}

    return (<>
<div className="container-fluid mt-2">
  <div className="row">
    <div className="col-md-9 main"  id="videos" > 
{
    isLoaded ?  video.map((item) =>{
        return <VideoCard  key={item.key} item={item} />
    }) : showLoading()
}
    </div>
    <div className="col-md-3" id="more" style={{ background : '#fff'}} >
       <SideBarList setCallback={(val)=>{setScreen(val)}} />

    </div>
  </div>
</div>

    </>)
}