import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import LibrarySidebar from './library_sidebar';
import SubjectContainer from '../subject/subject_container';

const Library = (props) => (
  <section className='library-container'>
    <LibrarySidebar />
    <Route path="/library/:subjectId" component={SubjectContainer}/>
  </section>
  );


export default withRouter(Library);
