import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import { createBrowserHistory } from "history";

import store from "./redux/store";
import App from './App';

import './scss/app.scss';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter history={history}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode >,
    document.getElementById('root')
);