import './styles/VideoList.css';
import React from 'react';
import VideoItem from './VideoItem'

const videosLista = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) =>{
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    });

    return(
        <div className="ui relaxed divided list d-flex flex-wrap">
            <div className="col-lg-12 col-12 mt-5">
                <h1 className="text-yellow main-title">Related Videos</h1>
            </div>
            {renderedList}
        </div>
    );
}

export default videosLista;