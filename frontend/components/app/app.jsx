import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Welcome from '../welcome/welcome';
import HomeContainer from '../home/home_container';

import HeaderContainer from '../header/header_container';


const App = (props) => (
    <Router>
      <div>
        <HeaderContainer />
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
    </Router>
  );


export default App;
