import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.component';
import VideoList from './components/video-list.component';
import VideoDetail from './components/video-detail.component';

const API_KEY = '';

class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
        YTSearch({ key: API_KEY, term: 'surf' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // es6 renders it as this.setState({ videos: videos }); when key value have same name
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <SearchBar />
                </div>
                <div className="row">
                    <VideoDetail video={ this.state.selectedVideo }></VideoDetail>
                    <VideoList onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } videos={ this.state.videos } selectedVideo={ this.state.selectedVideo } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));