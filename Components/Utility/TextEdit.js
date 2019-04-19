/*

CODETEST - Brad Eichen

TextEdit.js
Component used for text entry to edit fields in card
Accepts field prop from parent that is used in conjunction with value to store changes in the store

*/

import React, { Component } from 'react';

export default class TextEdit extends Component {
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
        this.props.updateStore(this.props.field, e.target.value);
    }
    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.changeValue} />
        );
    }
}