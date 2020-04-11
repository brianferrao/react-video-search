import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDisplay from './VideoDisplay';

class App extends React.Component {
    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onSearchSubmit('buildings');
    }

    onSearchSubmit = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                q: searchTerm
            }            
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    onItemClick = (video) => {
        this.setState({selectedVideo : video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}></SearchBar>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDisplay video={this.state.selectedVideo}></VideoDisplay>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onItemClick={this.onItemClick}></VideoList>
                        </div>
                    </div>
                </div>             
            </div>
        );
    }
}

export default App;