/*

CODETEST - Brad Eichen

Search.js
Displays text field for search functionality
Current value entered is shown via props receieved
Input is sent to be stored via function received in props

*/

import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value !== null ? props.value : ""
        };
    }
    changeValue = (e) => {
        this.setState({
            value: e.target.value
        });
        this.props.updateStore(e.target.value);
    }
    render() {
        return (
            <input 
                type="text" 
                value={this.state.value} 
                onChange={this.changeValue} 
                placeholder="Enter text to search"
            />
        );
    }
}