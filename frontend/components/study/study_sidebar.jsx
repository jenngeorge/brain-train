import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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


export default LibrarySidebar;
