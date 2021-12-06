import * as React from 'react'
import MainHeader from '../component/home/MainHeader'
import VideoApp from '../component/video/VideoApp'
export default function Watch(){
    return(<>
       <div class="container">
         <MainHeader /> 
         <VideoApp  src="https://www.googleapis.com/drive/v3/files/1NK4IajHS9EC_LRfY8Dh7IcvCdak8PvKI?alt=media&key=AIzaSyCNRerZNkFQS4NMgupkvqpuvq-wdTQWm9E" poster="https://drive.google.com/thumbnail?id=1NK4IajHS9EC_LRfY8Dh7IcvCdak8PvKI"/>
          </div>
    </>)
}