import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import { reducer } from './reducer';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialStore = {
    operatorA: '',
    operatorB: '',
    operator: null,
    history: []
    // result: '0'
}

let store = createStore(reducer, ({ calcStore: initialStore}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
