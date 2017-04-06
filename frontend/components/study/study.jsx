import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import StudySidebar from './study_sidebar';
// import DeckContainer from '../deck/deck_container';

const Study = (props) => (

      <div className="study-container">
        <StudySidebar />

      </div>
  );


export default withRouter(Study);
