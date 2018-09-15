import React from 'react';

const VideoList = (props) => {
    return (
        <ul className="col-md-4 list-group ml-auto">
            <li className="list-group-item">
                { props.videos.length }
            </li>
        </ul>
    );
};

export default VideoList;