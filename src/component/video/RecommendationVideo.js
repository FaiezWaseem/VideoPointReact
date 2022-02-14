import React from 'react'
import "../../styles/video/recommendation.css"
import {useNavigate} from 'react-router-dom';
export default function RecommendationVideo({item}) {
  const history = useNavigate()
  return (
    <div class={"box "+item.key} data-id={item.key} onClick={()=>{ history("/watch?e="+item.key)}} >
    <div class="video-recomended">
        <video src="" poster={"https://drive.google.com/thumbnail?id=" + item.thumbnail} id={item.key} preview={item.gif} >
    </video></div>
   <div class="v-details">
        <h2 id={item.key} data-id={item.key}>{item.title.length > 40 ? item.title.substring(0 , 40)+"..." : item.title}</h2>
        <h3 id="v-details">{item.username}</h3>
        <h5 id="v-details">{item.view} views</h5>
    </div>
  </div>
  )
}
