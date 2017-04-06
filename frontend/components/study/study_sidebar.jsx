import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class LibrarySidebar extends React.Component{
  constructor(){
    super();

  }
  render(){
    return(
      <section className="sidebar-container">
        <Link to="/library">Library</Link>
        <div>Deck Title</div>

      </section>
    );
  }
}


export default withRouter(LibrarySidebar);
