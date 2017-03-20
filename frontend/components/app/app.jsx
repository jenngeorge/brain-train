import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// http://rants.broonix.ca/upgrading-to-react-router-v4/
// https://reacttraining.com/react-router/web/example/auth-workflow

import Welcome from '../welcome/welcome';

import HeaderContainer from '../header/header_container';

const App = (props) => (
    <Router>
      <div>
        <h1>Hi I'm App</h1>
        <Route path="/" component={HeaderContainer} />
      </div>
    </Router>
  );


export default App;
