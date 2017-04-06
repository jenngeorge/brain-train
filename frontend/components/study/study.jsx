import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StudySidebar from './study_sidebar';
// import DeckContainer from '../deck/deck_container';

const Study = (props) => (
    <Router>
      <div className="study-container">
        <StudySidebar />

      </div>
    </Router>
  );
        // <Route path="/study/:deckId" component={DeckContainer} />

export default Study;
