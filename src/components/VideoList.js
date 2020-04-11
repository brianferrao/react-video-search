import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
    renderVideos = () => {
        return this.props.videos.map((video)=> {
            return <VideoItem 
                        key={video.id.videoId}  
                        item={video}
                        onItemClick={this.props.onItemClick}>                            
                        </VideoItem>
        });
    }

    render() {        
        return (
            <div className="ui relaxed divided list">{this.renderVideos()}</div>
        );
    }
}

export default VideoList;