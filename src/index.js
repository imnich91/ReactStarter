const AppContainer = (process.env.NODE_ENV === 'development') ?
  require('react-hot-loader/lib/AppContainer.dev.js') :
  require('react-hot-loader/lib/AppContainer.prod.js');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './Containers/App';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  rootEl
);
