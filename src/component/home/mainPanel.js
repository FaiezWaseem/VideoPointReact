import * as React from 'react';
import '../../styles/home/mainpanel.css'
import SideBarList from './SideBarList'
import SkeletonLoading from '../Skeleton/SkeletonLoading' 
import VideoCard from './VideoCard'
export default function Panel({currentPage}){
   const [screen , setScreen] = React.useState(currentPage);

   window.addEventListener('resize' , function(e){
       let more = this.document.getElementById('more').style.display;
       (window.innerWidth < 768) ? more = 'none' : more = 'block'
   }) 
function showLoading(){
   return (
 <>
     <SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading /><SkeletonLoading />
 </>
   )
}

    return (<>
<div class="container-fluid mt-2">
  <div class="row">
    <div class="col-md-9 main"  id="videos" > 

    <VideoCard id="-iuysdk" title="Munna Bhai mbbs || move funny scene" date="12/7/21" 
     profile="https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&token=17851edc-fc2f-4d33-9105-77d4b805d7dd" 
      thumnail="https://thumbnails.odysee.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/xgs7UwM89Hs" 
       uploader="Faiez Waseem" 
        view="34" />
    <VideoCard id="-iuysdj" title="Munna Bhai mbbs || move funny scene" date="12/7/21" 
     profile="https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&token=17851edc-fc2f-4d33-9105-77d4b805d7dd" 
      thumnail="https://thumbnails.odysee.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/xgs7UwM89Hs" 
       uploader="Faiez Waseem" 
        view="34" />
    <VideoCard id="-iuysdm" title="Munna Bhai mbbs || move funny scene" date="12/7/21" 
     profile="https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&token=17851edc-fc2f-4d33-9105-77d4b805d7dd" 
      thumnail="https://thumbnails.odysee.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/xgs7UwM89Hs" 
       uploader="Faiez Waseem" 
        view="34" />
    <VideoCard id="-iuysdp" title="Munna Bhai mbbs || move funny scene" date="12/7/21" 
     profile="https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&token=17851edc-fc2f-4d33-9105-77d4b805d7dd" 
      thumnail="https://thumbnails.odysee.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/xgs7UwM89Hs" 
       uploader="Faiez Waseem" 
        view="34" />
    <VideoCard id="-iuysde" title="Munna Bhai mbbs || move funny scene" date="12/7/21" 
     profile="https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&token=17851edc-fc2f-4d33-9105-77d4b805d7dd" 
      thumnail="https://thumbnails.odysee.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/xgs7UwM89Hs" 
       uploader="Faiez Waseem" 
        view="34" />
    <VideoCard id="-iuysdw" title="Munna Bhai mbbs || move funny scene" date="12/7/21" 
     profile="https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&token=17851edc-fc2f-4d33-9105-77d4b805d7dd" 
      thumnail="https://thumbnails.odysee.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/xgs7UwM89Hs" 
       uploader="Faiez Waseem" 
        view="34" />
    <VideoCard id="-iuysdq" title="Munna Bhai mbbs || move funny scene" date="12/7/21" 
     profile="https://firebasestorage.googleapis.com/v0/b/social-21c03.appspot.com/o/Profile%2Favatar23897.png?alt=media&token=17851edc-fc2f-4d33-9105-77d4b805d7dd" 
      thumnail="https://thumbnails.odysee.com/optimize/s:390:220/quality:85/plain/https://thumbnails.lbry.com/xgs7UwM89Hs" 
       uploader="Faiez Waseem" 
        view="34" />
    

    
{ showLoading()}

    </div>
    <div class="col-md-3" id="more" style={{ background : '#fff'}} >
       <SideBarList setCallback={(val)=>{setScreen(val)}} />

    </div>
  </div>
</div>

    </>)
}