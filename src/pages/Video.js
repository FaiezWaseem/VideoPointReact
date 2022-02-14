import * as React from 'react'
import MainHeader from '../component/home/MainHeader'
import VideoApp from '../component/video/VideoApp'
import RecommendationVideo from "../component/video/RecommendationVideo"
import VideoDetail from "../component/video/videoDetails"
import "../styles/video/main.css"
import "../styles/video/player.css"
import database from "../Backend/Fire"
import { useLocation } from 'react-router-dom';

export default function Watch(){
  const [recommendedVideos , setRecommendationVideos] = React.useState([]);
  const [id_here , setVideoKey] = React.useState("");
  const useQuery = () => new URLSearchParams(useLocation().search);
     const query = useQuery();
    const postId = query.get('e');

     React.useEffect(()=>{
      database.once('video/all/'+postId  , (snap)=>{
        setVideoKey(snap.val().thumbnail)
      })
        
       //Loading Video recommnedation
       setRecommendationVideos([])
           database.fb('video/all/').limitToLast(7).on('child_added',function(snapshot){
            setRecommendationVideos(  item => {
              return [
                snapshot.val(),
                ...item
              ]
            })
            })
     },[postId])


    return(<>
       <div className="container"  >
         <MainHeader /> 
         <div className='mainBody'  >
           <div  className='item1'>
           <VideoApp  src={`https://www.googleapis.com/drive/v3/files/${id_here}?alt=media&key=AIzaSyCNRerZNkFQS4NMgupkvqpuvq-wdTQWm9E`} poster={"https://drive.google.com/thumbnail?id="+id_here}/>
           <VideoDetail />
           </div>
           <div  className='item2'>
             {
               recommendedVideos.map((item)=><RecommendationVideo  key={item.key}  item={item} />)
             }
           </div>
         </div>
          </div>
    </>)
}