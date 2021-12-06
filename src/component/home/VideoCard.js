import * as React from 'react';
import '../../styles/home/videocard.css'
import {useNavigate} from 'react-router-dom';
export default function VideoCard({id , title , date , uploader , thumnail , profile , view}){
  const history = useNavigate();
const postId = id;
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
            <div class="video dark-card" onClick={()=>{history("/watch?e="+id)}} >
  <div class="video__thumbnail" >
  <img src={thumnail} class={"video__thumbnail "+id} preview="https://drive.google.com/thumbnail?id=1oO6YyHGrxAbh0vS6y1z7Icjf_n_U7qYw" alt={"video : "+title}  onMouseEnter={(e)=>{moveOver(e)}}   onMouseLeave={(e)=>{moveOut(e)}} />
  </div>
  <div class="video__details">
    <div class="author">
      <img src={profile} alt="" />
    </div>
    <div class="title dark-card-text">
      <h3 class="dark-card-text">{title}</h3>
      <a  class="dark-card-text">{uploader}</a>
      <span>{view}view • {date}</span>
    </div>
  </div>
</div>
        </>
    )
}