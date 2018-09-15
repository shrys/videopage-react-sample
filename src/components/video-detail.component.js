import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>
    const videoId = video.id.videoId;
    // const url = 'https://www.youtube.com/embed/' + videoId;
    const url = ` https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="rounded embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} />
            </div>
            <div className="details mt-4">
                <h4>{video.snippet.title}</h4>
                <hr />
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default VideoDetail;