import React from 'react';
import {Provider} from 'react-redux';

import App from './app/app';
import Header from './header/header';
import Welcome from './welcome/welcome';


const Root = ({store}) => {

  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
