import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';

class VideoApp extends Component {
   
    player = {}
    state = {
        video: {
            src: this.props.src,
            poster: this.props.poster
        }
    }
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }

    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }

    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }

    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }

    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }

    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd(){
        console.log("Video ended");
    }

    render() {
        const queryParams = new URLSearchParams(window.location.search);
      const  id = queryParams.get('e');
       console.log(id)
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    source={this.props.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        );
    }
}

export default VideoApp;