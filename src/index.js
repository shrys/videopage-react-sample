import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import _ from 'lodash';
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
        this.videoSearch('');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // es6 renders it as this.setState({ videos: videos }); when key value have same name
        });
    }

    render() {
        const delayedSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div className="container">
                <div className="row">
                    <SearchBar onSearchTermChange={ delayedSearch } />
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