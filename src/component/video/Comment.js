import React from 'react'
import "../../styles/video/comment.css"
import data from "../../Backend/Lib"

export default function Comment({item}) {
  return (
    <div>
        <div class="video_recieved_comment">
  <div class="comment_logo">
    <img  
    style={{ borderRadius : 50}}
    src={item.profile} alt="not found" width="40px" height="40px"/>
  </div>
  <div class="comment_details">
    <div class="commenter">
      <h5>{item.name}</h5>
      <p>{data.convertTime(item.time)}</p>
    </div>
    <div class="message">
      <p>{item.msg}</p>
    </div>
  </div>
 </div>
    </div>
  )
}
