import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.component';
import VideoList from './components/video-list.component';

const API_KEY = 'AIzaSyBpi3cWC5UZ-ws0VYz5O2Ah8V6eYBsd4LU';

class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        YTSearch({ key: API_KEY, term: 'surf' }, (videos) => {
            this.setState({ videos }); // es6 renders it as this.setState({ videos: videos }); when key value have same name
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <SearchBar />
                </div>
                <div className="row">
                    <VideoList videos={ this.state.videos } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));