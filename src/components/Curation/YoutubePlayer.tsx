import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubeType{
    videoId: string;
    width: string;
    height: string;
}

const YoutubePlayer = (props: YoutubeType) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: props.height,
        width: props.width,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return <YouTube videoId={props.videoId} opts={opts} onReady={onPlayerReady} />;
}

export default YoutubePlayer;