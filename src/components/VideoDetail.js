import './styles/VideoDetail.css';
import React from 'react';

const VideoDetail = ({video}) =>{

	if(!video){ //Essa verificação é feita pois o state de selectedVideo no App está como null
		return(
			<div>
				
			</div>
		);
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

	return(
		<div>
			<div className="ui segment" style={{ margin: "30px 0" }}>
				<h4 id="video-title" className="ui header">{ video.snippet.title }</h4>
				<p>{video.snippet.description}</p>
			</div>
			<div className="ui segment" style={{ margin: "30px 0" }}>
				<iframe title="video-player" width="auto" height="500" src={videoSrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
			</div>
		</div>
	);   
}

export default VideoDetail;