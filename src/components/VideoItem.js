import './styles/VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div onClick={ () => onVideoSelect(video) } id="item" className="item">
            <img className="ui image img-fluid" alt={video.snippet.description} src={ video.snippet.thumbnails.medium.url }></img>
            <div id="content" className="content">
                <div id="header" className="header">{ video.snippet.title }</div>
            </div>
        </div>
    );
}

export default VideoItem;