import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';

//Provider is the parent of everything in the application.

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
   
    document.getElementById('root')
);
