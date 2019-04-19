/*

CODETEST - Brad Eichen

Card.js
Component for individual cards

Displays information for each person retrieved. If the edit button is clicked, the text fields become editable.

*/

import React, { Component } from 'react';
import TextEdit from './Utility/TextEdit';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const items = this.props.people;
        const edit = this.props.edit;
        
        return (
            <div className="card">
                <div className="tophalf">
                    <div>
                        {edit === items.username ? 
                        <div onClick={() => this.props.saveCard(items.username)}>
                            <img src="./dist/save.png" />
                        </div>:
                        <div onClick={() => this.props.editCard(items.username)}>
                            <img src="./dist/edit.png" />
                        </div>}
                    </div>
                    
                    <h2>
                        {edit === items.username ? 
                            <div>
                                <TextEdit 
                                    value={items.first} 
                                    field="first"
                                    updateStore={this.props.editData}
                                />
                                <TextEdit 
                                    value={items.last} 
                                    field="last"
                                    updateStore={this.props.editData}
                                />
                            </div> :
                            <div>
                                {items.first + " " + items.last}
                            </div>}
                    </h2>
                    <div><img className="img-cover" src={items.picture}/></div>
                </div>
                <div className="bottomhalf">
                    <div>
                        {edit === items.username ?
                            <TextEdit 
                                value={items.email} 
                                field="email"
                                updateStore={this.props.editData}
                            />:
                            items.email}
                    </div>
                    <div>
                        {edit === items.username ?
                            <TextEdit 
                                value={items.phone}
                                field="phone"
                                updateStore={this.props.editData}
                            />:
                            items.phone}
                    </div>
                    <div>
                        {edit === items.username ?
                        <div>
                            <TextEdit 
                                value={items.city}
                                field="city"
                                updateStore={this.props.editData}
                            />
                            <TextEdit 
                                value={items.state}
                                field="state"
                                updateStore={this.props.editData}
                            />
                        </div>:
                        <div>
                            {items.city + ", " + items.state}
                        </div>}
                    </div>
                </div>
            </div>
        );
    }
}