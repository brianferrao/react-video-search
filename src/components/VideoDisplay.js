import React from 'react';

const VideoDisplay = ({video}) => {
    if (video === null) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <iframe width="100%" height="400px" title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
            <div className="ui segment">
                {video.snippet.title}
            </div>
        </div>
    );
};

export default VideoDisplay;