import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { reducer } from './reducer/reducer';
import { createStore } from "redux";
import { Provider } from "react-redux";

import './index.scss';

/**
 * Initial state
 */

const calcStore = {
    operatorA: '',
    operatorB: '',
    operator: null,
    history: []
}

/**
 * Redux store
 */

let store = createStore(reducer, ({ calcStore }));


/**
 * Render
 */

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
