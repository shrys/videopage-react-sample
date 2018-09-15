import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="col-md-12 mt-4">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">search here</span>
                    </div>
                    <input className="form-control" onChange={this.onIputChange} />
                </div>
            </div>
        );
    }

    onIputChange(event) {
        console.log(event.target.value);
        ;
    }
}

export default SearchBar;