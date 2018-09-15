import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.component';

const API_KEY = '';

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
            <div className="row">
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));