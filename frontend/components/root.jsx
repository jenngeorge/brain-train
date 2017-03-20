import React from 'react';
import {Provider} from 'react-redux';

import App from './app/app';
import Header from './header/header';
import Welcome from './welcome/welcome';


const Root = ({store}) => {

  const _ensureSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfSignedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
