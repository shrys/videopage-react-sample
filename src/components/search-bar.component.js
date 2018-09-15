import React, { Component } from 'react';

class SearchBar extends Component { // states: only class based components have states not funtion based componenets

    constructor(props) {
        super(props); // ctor from componenets

        this.state = { term: '' }; // whenever user searches something, state will be used
    }
    render() {
        return (
            <div className="col-md-12 mt-4">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">videos</span>
                    </div>
                    <input value={ this.state.term } className="form-control" onChange={ this.onIputChange } placeholder='search here' />
                </div>
            </div>
        );
    }

    onIputChange(event) {
        this.setState({ term: event.target.value });
    }
}

export default SearchBar;