import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar.component';

const API_KEY = '';

YTSearch({ key: API_KEY, term: 'surf' }, (data) => {
    console.log(data);
    
});

const App = () => {
    return (
        <div className="row">
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));