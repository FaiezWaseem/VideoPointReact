import * as React from 'react'
import MainHeader from '../component/home/MainHeader'
import VideoApp from '../component/video/VideoApp'
import RecommendationVideo from "../component/video/RecommendationVideo"
import VideoDetail from "../component/video/videoDetails"
import Comment from "../component/video/Comment"
import "../styles/video/main.css"
import "../styles/video/player.css"
import database from "../Backend/Fire"
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Watch(){
  const [recommendedVideos , setRecommendationVideos] = React.useState([]);
  const [comments , setComments] = React.useState([]);
  const [videoSources , setVideoKey] = React.useState({ src : "" , poster : ""});
  const { video_Key } = useParams();

     React.useEffect(()=>{
      database.once('video/all/'+video_Key  , (snap)=>{
        const id_here = snap.val().thumbnail ;
        setVideoKey({
        src : `https://www.googleapis.com/drive/v3/files/${id_here}?alt=media&key=AIzaSyCNRerZNkFQS4NMgupkvqpuvq-wdTQWm9E` ,
        poster : "https://drive.google.com/thumbnail?id="+id_here,
        })
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
            setComments([])
            database.on("commentDB/"+video_Key , (snap)=>{
              setComments(  item => {
                return [
                  snap.val(),
                  ...item
                ]
              })
            })
     },[video_Key])


    return(<>
       <div className="container"  >
         <MainHeader /> 
         <div className='mainBody'  >
           <div  className='item1'>
           <VideoApp  src={videoSources.src} poster={videoSources.poster}/>
           <VideoDetail />
           {
             comments.map((item => <Comment  item={item}  key={item.key}/> ))
           }
          
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