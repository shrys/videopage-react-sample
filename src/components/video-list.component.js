import React from 'react';
import VideoListItem from './video-list-item.component';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                key={ video.etag }
                video={ video }
                onVideoSelect={ props.onVideoSelect }
                isActive={ props.selectedVideo == video } />
        );
    });

    return (
        <ul className="col-md-4 list-group ml-auto">
            {videoItems}
        </ul>
    );
};

export default VideoList;