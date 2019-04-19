/*

CODETEST - Brad Eichen

Constants.js
Keys used throughout application to make sure there are no incorrect values being used

*/

import keyMirror from 'keymirror';

export default {
    ActionTypes: keyMirror({
        "PEOPLELIST": null,
        "SEARCH_VAL": null,
        "CHANGE_SORT": null,
        "EDIT_CARD": null,
        "SAVE_CARD": null,
        "EDIT_DATA": null,
    })
}