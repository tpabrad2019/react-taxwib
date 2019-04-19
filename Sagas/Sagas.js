/*

CODETEST - Brad Eichen

Sagas.js
Generator functions for handling asynchronous calls

*/

import { put, call } from 'redux-saga/effects';
import * as API from '../Components/Utility/FetchApi';
import Constants from '../Components/Utility/Constants';

const ActTypes = Constants.ActionTypes;

export function* rootSaga() {
    yield call(getDefault)
}

function* getDefault() {
    try {
        let resultList = yield call(API.fetchPeople);

        yield put({ type: ActTypes.PEOPLELIST, resultList })
    } catch (error) {
        yield put({ type: ActTypes.SHOW_ERROR})
    }
    

}