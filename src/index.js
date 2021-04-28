import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom'; // it gets wrapped around app and gives it all the functionality of routing.
import { Provider } from 'react-redux'; // component that wraps around app to provide access to the store and is the parent of everything inside app
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';

// Provider is the parent of everything in the application.
// by adding store in the Provider, it gives the store full access to the app
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
