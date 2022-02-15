import React from 'react'
import "../../styles/video/videoDetails.css"
import database from "../../Backend/Fire"
import data from "../../Backend/Lib"
import { useParams } from 'react-router-dom';
import user from "../../Backend/user"

export default function VideoDetail() {
    const [videoInfo , setVideoInfo] =  React.useState( {
      title : "Shayari Status",
      uploader : "Faiez Waseem",
      view : "23",
      description : "loerem ipsum hey  343-9 d;fkd  jhth " , 
      profile : "https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&amp;token=17851edc-fc2f-4d33-9105-77d4b805d7dd",
      likes : 0,
      date : "3/4/21",
      type : "sad"
    })
   const [isVisible , setVisible] = React.useState(false); 
   const [value , setValue] = React.useState(""); 
   const { video_Key } = useParams();
   const [ myLiked   , setMyLiked] = React.useState(false);
  


    React.useEffect(()=>{
      //Loading Video Details
      database.once('video/all/'+video_Key  , (snap)=>{
        setVideoInfo(
          {
            title : snap.val().title,
            uploader :  snap.val().username,
            view :  snap.val().view,
            description :  snap.val().des , 
            profile : snap.val().profile,
            likes : snap.val().likes,
            date : data.convertTime(snap.val().time),
            type : snap.val().type
          }
        )
      })
      loadLiked();
    } , [video_Key])
    
    const handleClick = () =>{
      if(database.getUid()){
         console.clear();
        user((obj)=>{
          const key = database.getKey();
          database.fset("commentDB/"+video_Key+"/"+key , {
            key : key,
            msg : value,
            uid : database.getUid(),
            name : obj.name,
            profile : obj.profile,
            time : data.getTimeinMilli(),
          })
          setValue("")
        })
       }else{
         alert("Need To be Logged In")
       }
   } 

  const loadLiked = () =>{
      database.on('video/all/'+video_Key+'/liked/', (snap)=>{
        if(snap.key ===  database.getUid()){
          setMyLiked(true);
        }
      })
  }
   const checkLiked = () =>{
       setMyLiked(true);
       console.log("render")
       const fuserid = database.getUid();
       database.fb('video/all/'+video_Key).update({
        "likes" : videoInfo.likes + 1
       })
       database.fb(`video/${videoInfo.type}/`+video_Key).update({
        "likes" : videoInfo.likes + 1
       })
       setVideoInfo( item =>{ return { ...item , likes : item.likes++,}})
        database.fb('video/all/'+video_Key+'/liked/'+fuserid).set({
            liked : true,
            "uid": fuserid
       }) 
        database.fb(`video/${videoInfo.type}/`+video_Key+'/liked/'+fuserid).set({
            liked : true,
            "uid": fuserid
       }) 
   }
   const checkUnLiked = () =>{
       setMyLiked(false);
       const fuserid = database.getUid();
       database.update('video/all/'+video_Key , {
        "likes" : videoInfo.likes - 1,
       })
       database.update(`video/${videoInfo.type}/`+video_Key ,{
        "likes" : videoInfo.likes - 1,
       })
       setVideoInfo( item =>{ return { ...item , likes : item.likes - 1,}})
       database.fb('video/all/'+video_Key+'/liked/').child(fuserid).remove();
       database.fb('video/'+videoInfo.type+'/'+video_Key+'/liked/').child(fuserid).remove();
   }
   const onLikeClicked = () =>{
    myLiked ? checkUnLiked() : checkLiked()
   }
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
                  <i className="material-icons" id="font_like" onClick={onLikeClicked}  >{myLiked ? "favorite" : "favorite_border"}</i>
                  <span id="like_count">{videoInfo.likes}</span>
                  <div className="dropdown">
                    <i className="material-icons" id="font_share" >share</i>
                    <div id="myDropdown" className="dropdown-content">
                      <a>Copy Video Link</a>
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
              <input type="text" id="comment" value={value} placeholder="write something!"  onChange={(e)=> setValue(e.target.value)} />
              <i className="material-icons" id="comment_send" onClick={handleClick}  >send</i>
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
