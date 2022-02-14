import * as React from 'react';
import '../../styles/home/videocard.css'
import {useNavigate} from 'react-router-dom';
import data from "../../Backend/Lib"
export default function VideoCard({item}){
  const history = useNavigate();
const postId = item.key;
function moveOver(x){
  const e = x
  const preview = e.target.attributes[2].value
  const src = e.target.attributes[0].value
  console.log("Mouse Over : " ,  {
    src : src,
    preview : preview
  })
  document.querySelector(`.${postId}`).src = preview;
  document.querySelector(`.${postId}`).setAttribute('preview' , src)
}
function moveOut(x){
  const e = x
  const preview = e.target.attributes[2].value
  const src = e.target.attributes[0].value
  console.log("Mouse Out : " ,  {
    src : src,
    preview : preview
  })
  document.querySelector(`.${postId}`).src = preview;
  document.querySelector(`.${postId}`).setAttribute('preview' , src)
}


    return(
        <>
            <div class="video dark-card" onClick={()=>{history("/watch?e="+item.key)}} >
  <div class="video__thumbnail" >
  <img src={"https://drive.google.com/thumbnail?id="+item.thumbnail} class={"video__thumbnail "+item.key} preview={item.gif} alt={"video : "+item.title}  onMouseEnter={(e)=>{moveOver(e)}}   onMouseLeave={(e)=>{moveOut(e)}} />
  </div>
  <div class="video__details">
    <div class="author">
      <img src={item.profile} alt={item.username} />
    </div>
    <div class="title dark-card-text">
      <h3 class="dark-card-text">{item.title.length > 55 ? item.title.substring(0 , 55)+"..." : item.title}</h3>
      <a  class="dark-card-text">{item.username}</a>
      <span>{item.view}view • {data.convertTime(item.time)}</span>
    </div>
  </div>
</div>
        </>
    )
}