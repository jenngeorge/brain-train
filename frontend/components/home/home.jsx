import React from 'react';
import { BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import Library from '../library/library';
import DeckEditContainer from '../deck/deck_edit_container.jsx';
import Study from '../study/study';

import SubjectContainer from '../subject/subject_container';

const Home = (props) => (
      <div className="home-container">
        <Route path="/library" component={Library}/>
        <Route path="/edit/:deckId" component={DeckEditContainer} />
        <Route path="/study/:deckId" component={Study} />
      </div>
  );


export default withRouter(Home);
