/*

CODETEST - Brad Eichen

CardPage.js
Handles primary display of cards from retrieved state store

Creators retrieved and assigned to props to be used in application
Store retrieved, and filtered/sorted if necessary before assigning to props

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Creator from '../Actions/Creators';

import Card from './Card';
import Search from './Search';
import Sort from './Sort';

class CardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* Top row containing search box and sort buttons */}
                <div className="tools">
                    <div>
                        <span>Filter By </span>
                        <Search
                            updateStore={this.props.searchVal}
                            value={this.props.ui.searchText}
                        />
                    </div>
                    <div>
                        <span>Sort:</span>
                        <Sort 
                            value={this.props.ui.sort}
                            updateStore={this.props.changeSort}
                        />
                    </div>
                    
                </div>
                {/* Map from results creating each card */}
                <div className="cardpage">
                    {this.props.results.map((a,i) => {
                        return (
                            <Card 
                                people={a} 
                                key={i}
                                edit={this.props.ui.edit}
                                editCard={this.props.editCard}
                                saveCard={this.props.saveCard}
                                editData={this.props.editData}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return({
        results: personFilter(state.results.people, state.ui.searchText, state.ui.sort),
        ui: state.ui
    });
}

function mapDispatchToProps(dispatch) {
    return {
        searchVal: (val) => {
            dispatch(Creator.searchVal(val));
        },
        changeSort: (val) => {
            dispatch(Creator.changeSort(val));
        },
        editCard: (val) => {
            dispatch(Creator.editCard(val));
        },
        saveCard: (val) => {
            dispatch(Creator.saveCard(val));
        },
        editData: (field, val) => {
            dispatch(Creator.editData(field, val));
        }
    }
}

const personFilter = (obj, textFilter, sortValue) => {
    return obj.filter(eObj => {
        const objKeys = Object.keys(eObj);
        if(!textFilter.length) return true;
        let found = false;
        objKeys.forEach(zKey => {
            if (zKey !== "picture") {
                if (eObj[zKey].indexOf(textFilter) > -1) found = true;
            }
        })
        return found;
    }).sort((card1, card2) => {
        if (sortValue == "first") {
            return card1.first.localeCompare(card2.first);
        } else if (sortValue == "last") {
            return card1.last.localeCompare(card2.last);
        } else if (sortValue == "email") {
            return card1.email.localeCompare(card2.email);
        } else if (sortValue == "phone") {
            return card1.phone.localeCompare(card2.phone);
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);