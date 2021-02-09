import './styles/VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div onClick={ () => onVideoSelect(video) } id="item" className="item d-flex flex-wrap justify-content-center col-lg-3 col-12">
            <img className="ui image img-fluid" alt={video.snippet.description} src={ video.snippet.thumbnails.medium.url }></img>
            <div id="content" className="content mt-3">
                <div id="header" className="header text-yellow">{ video.snippet.title }</div>
            </div>
        </div>
    );
}

export default VideoItem;