import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// http://rants.broonix.ca/upgrading-to-react-router-v4/
// https://reacttraining.com/react-router/web/example/auth-workflow

import Welcome from '../welcome/welcome';
import Home from '../home/home';

import HeaderContainer from '../header/header_container';


const App = (props) => (
    <Router>
      <div>
        <HeaderContainer />
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );


export default App;
