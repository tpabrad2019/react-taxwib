/*

CODETEST - Brad Eichen

Reducer.js
Single reducer function to modify state
Uses constants in a single switch to handle each dispatched event

*/

import iState from '../Store/store';
import Constants from '../Components/Utility/Constants';

const ActTypes = Constants.ActionTypes;
const initial_state = iState;

export function reducers(state = initial_state, action) {
    switch(action.type) {
        case "PEOPLELIST":
            let people = [];
            action.resultList.results.forEach(a => {
                let person = {
                    first: a.name.first,
                    last: a.name.last,
                    picture: a.picture.medium,
                    email: a.email,
                    phone: a.phone,
                    city: a.location.city,
                    state: a.location.state,
                    username: a.login.username
                }
                people = [
                    ...people,
                    person
                ];
                    
                
            })
            return {
                ...state,
                results: {
                    ...state.results,
                    people: people
                }
            }
        case "SEARCH_VAL":
            return {
                ...state,
                ui: {
                    ...state.ui,
                    searchText: action.val
                }
            }
        case "CHANGE_SORT":
            return {
                ...state,
                ui: {
                    ...state.ui,
                    sort: action.val
                }
            }
        case "EDIT_CARD":
            return {
                ...state,
                ui: {
                    ...state.ui,
                    edit: action.val
                }
            }
        case "SAVE_CARD":
            return {
                ...state,
                results: {
                    ...state.results,
                    people: state.results.people.map(a => {
                        if (state.ui.edit === a.username) {
                            return {
                                ...a,
                                ...state.ui.data
                            };
                        }
                        return {...a};
                    })
                },
                ui: {
                    ...state.ui,
                    edit: "",
                    data: {}
                }
            }
        case "EDIT_DATA":
            return {
                ...state,
                ui: {
                    ...state.ui,
                    data: {
                        ...state.ui.data,
                        [`${action.field}`]: action.val
                    }
                }
            }
        default:
            return state;
    }
}