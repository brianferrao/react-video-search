import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
    onItemClick = () => {
        this.props.onItemClick(this.props.item);
    }

    render() {
        const {snippet} = this.props.item;
        return (
            <div className="video-item item" onClick={this.onItemClick}>
                <img className="ui image" alt={snippet.description} src={snippet.thumbnails.medium.url}></img>
                <div className="content">
                    <div className="description">
                        {snippet.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoItem;