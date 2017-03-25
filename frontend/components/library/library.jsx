import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LibrarySidebar from './library_sidebar';
import SubjectContainer from '../subject/subject_container';

const Library = (props) => (
    <Router>
      <div className="library-container">
        <LibrarySidebar />
        <Route path="/library/:subjectId" component={SubjectContainer} />
      </div>
    </Router>
  );


export default Library;
