import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar.component';

const API_KEY = '';

const App = () => {
    return (
        <div className="row">
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));