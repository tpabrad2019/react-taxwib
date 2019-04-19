/*

CODETEST - Brad Eichen

Sort.js
Displays radio buttons to select value to sort cards by
Current value entered is shown via props receieved
Input is sent to be stored via function received in props

*/

import React, { Component } from 'react';

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value !== null ? props.value : ""
        };
    }
    changeSort = (e) => {
        this.setState({
            value: e.target.checked
        });
        this.props.updateStore(e.target.value);
    }
    render() {
        return (
            <div>
                <div>
                    <span>First Name</span>
                    <input
                        name="sort"
                        type="radio"
                        value="first"
                        checked={this.props.value === "first"}
                        onChange={this.changeSort}
                    />
                </div>
                <div>
                    <span>Last Name</span>
                    <input
                        name="sort"
                        type="radio"
                        value="last"
                        checked={this.props.value === "last"}
                        onChange={this.changeSort}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <input
                        name="sort"
                        type="radio"
                        value="email"
                        checked={this.props.value === "email"}
                        onChange={this.changeSort}
                    />
                </div>
                <div>
                    <span>Phone</span>
                    <input
                        name="sort"
                        type="radio"
                        value="phone"
                        checked={this.props.value === "phone"}
                        onChange={this.changeSort}
                    />
                </div>
                
            </div>
            
        );
    }
}