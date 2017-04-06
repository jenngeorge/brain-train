import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LibrarySidebar from './library_sidebar';
import SubjectContainer from '../subject/subject_container';

const Library = (props) => (
    <Router>
        <LibrarySidebar />
    </Router>
  );


export default Library;
