/*

CODETEST - Brad Eichen

Creators.js
Function to generate creators used in the app
Function is used and each creator is exported to be used as necessary

*/

import Constants from '../Components/Utility/Constants';

const ActTypes = Constants.ActionTypes;


function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        })
        return action; 
    }
}

export const searchVal = makeActionCreator(ActTypes.SEARCH_VAL, "val");
export const changeSort = makeActionCreator(ActTypes.CHANGE_SORT, "val");
export const editCard = makeActionCreator(ActTypes.EDIT_CARD, "val");
export const saveCard = makeActionCreator(ActTypes.SAVE_CARD, "val");
export const editData = makeActionCreator(ActTypes.EDIT_DATA, "field", "val");