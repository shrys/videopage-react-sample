import React from 'react';

const VideoListItem = ({ video, onVideoSelect, isActive }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
        <li onClick={() => { onVideoSelect(video); }} className={`list-group-item list-group-item-action ${isActive && "active"}`} style={{ cursor: 'pointer' }}>
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="img-thumbnail img-fluid media-object" style={{ maxHeight: '63px' }}></img>
                </div>
                <div className="ml-3 mr-2 media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;