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
  document.querySelector(`.${postId}`).src = preview;
  document.querySelector(`.${postId}`).setAttribute('preview' , src)
}
function moveOut(x){
  const e = x
  const preview = e.target.attributes[2].value
  const src = e.target.attributes[0].value
  document.querySelector(`.${postId}`).src = preview;
  document.querySelector(`.${postId}`).setAttribute('preview' , src)
}


    return(
        <>
  <div className="video dark-card" onClick={()=>{history("/watch/"+item.key+"/")}} >
     <div className="video__thumbnail" >
       <img src={"https://drive.google.com/thumbnail?id="+item.thumbnail} className={"video__thumbnail "+item.key} preview={item.gif} alt={"video : "+item.title}  onMouseEnter={(e)=>{moveOver(e)}}   onMouseLeave={(e)=>{moveOut(e)}} />
     </div>
     <div className="video__details">
        <div className="author">
          <img src={item.profile} alt={item.username} />
        </div>
         <div className="title dark-card-text">
          <h3 className="dark-card-text">{item.title.length > 55 ? item.title.substring(0 , 55)+"..." : item.title}</h3>
          <a href='#' className="dark-card-text">{item.username}</a>
       <span>{item.view}view • {data.convertTime(item.time)}</span>
      </div>
      </div>
    </div>
        </>
    )
}