import React from 'react'
import "../../styles/video/videoDetails.css"
import { useLocation } from 'react-router-dom';
import database from "../../Backend/Fire"
import data from "../../Backend/Lib"
export default function VideoDetail() {
    const [videoInfo , setVideoInfo] =  React.useState( {
      title : "Shayari Status",
      uploader : "Faiez Waseem",
      view : "23",
      description : "loerem ipsum hey  343-9 d;fkd  jhth " , 
      profile : "https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&amp;token=17851edc-fc2f-4d33-9105-77d4b805d7dd",
      likes : "3",
      date : "3/4/21"
    })
   const [isVisible , setVisible] = React.useState(false); 

     const query = new URLSearchParams(useLocation().search);
    const postId = query.get('e');
    React.useEffect(()=>{
      //Loading Video Details
      database.once('video/all/'+postId  , (snap)=>{
        setVideoInfo(
          {
            title : snap.val().title,
            uploader :  snap.val().username,
            view :  snap.val().view,
            description :  snap.val().des , 
            profile : snap.val().profile,
            likes :  snap.val().likes,
            date : data.convertTime(snap.val().time)
          }
        )
      })
    } , [postId])


  return (
    <div>
      <div className="vid__details">
              <div className="vid__title_box">
               <h3 id="vid_title">{videoInfo.title}</h3>
              </div>
              <div className="vid__data_box">
                <div className="vid-meta-data">
                  <span id="views">{videoInfo.view}view</span>
                  <span id="date">{videoInfo.date}</span>
                </div>
                <div className="vid_extra">
                  <i className="material-icons" id="font_like">favorite_border</i>
                  <span id="like_count">{videoInfo.likes}</span>
                  <div className="dropdown">
                    <i className="material-icons" id="font_share" onclick="dropDownList()">share</i>
                    <div id="myDropdown" className="dropdown-content">
                      <a onclick="sharelink()">Copy Video Link</a>
                      <a id="watchLater">Add To Watch Later </a>
                      <a id="report">Report</a>
                      <a id="embed">Embed</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="vid_uploader">
         <div className="userprofile">
            <img src={videoInfo.profile} alt="no img" id="avatar" />
            <h4 id="username">{videoInfo.uploader}</h4>
         </div>
         <div className="vid__des">
           <button id="Description"  onClick={()=> setVisible(!isVisible)}   ><p><i className="material-icons"  >add_circle</i></p>Description </button>
          {
            isVisible ? <p id="des">{videoInfo.description}</p> : <></>
          }
           
         </div>
      </div>
           
      <div className="vid__comment">
          <div className="write__comment">
              <img src="../assets/images/img_avatar.png" alt="not found" width="40px" height="40px" id="comment_profile" />
              <input type="text" id="comment" placeholder="write something!" />
              <i className="material-icons" id="comment_send">send</i>
          </div>
          <div className="vid__comments">
             <h2 id="click_Comment">Comments</h2>
          <div className="comment_box">
  
          </div>
        </div>
      </div>     


    </div>
  )
}
