import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// http://rants.broonix.ca/upgrading-to-react-router-v4/
// https://reacttraining.com/react-router/web/example/auth-workflow

import Welcome from '../welcome/welcome';
import Library from '../library/library';

import HeaderContainer from '../header/header_container';

const App = (props) => (
    <Router>
      <div>
        <HeaderContainer />
        <Route path="/welcome" component={Welcome} />
        <Route path="/library" component={Library} />
      </div>
    </Router>
  );


export default App;
