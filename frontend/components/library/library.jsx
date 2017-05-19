import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';
import LibrarySidebar from './library_sidebar';
import SubjectContainer from '../subject/subject_container';

const Library = (props) => (
  <section className='library-container'>
    <LibrarySidebar />
    <Route exact path="/library" render={(props) => {
        return (
          <section className="subject-show-container">
            <h3>
              Select a subject from the sidebar, <br/>
              or follow more from the <Link to="/search">Subjects </Link>
               page</h3>
          </section>)
      }} />
    <Route path="/library/:subjectId" component={SubjectContainer}/>
  </section>
  );


export default withRouter(Library);
