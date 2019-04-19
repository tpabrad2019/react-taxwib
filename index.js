/*

CODETEST - Brad Eichen
Displays formatted cards with random person informtion via API.
Cards can be filtered and sorted on all displayed info.
Details on cards can be modified and saved locally.

index.js - Entry file for application
Using latest version of ReactJS and Redux-Saga middleware for the asyncronous call to the API
@Babel is being used to javascript and jsx

*/


import React from 'react';
import ReactDOM from 'react-dom';

import '@babel/polyfill';
import 'regenerator-transform';

import CardPage from './Components/CardPage';
require('./Styles/Main.less');

import { reducers } from './Reducers/Reducer';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { rootSaga } from './Sagas/Sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <CardPage />
    </Provider>,
    document.getElementById('codetest')
); 

