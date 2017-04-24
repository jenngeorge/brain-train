import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class StudySidebar extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <section className="sidebar-container">
        <h1>{this.props.deck ? this.props.deck.title : ""}</h1>
        <div>
          scores will go here
        </div>

      </section>
    );
  }
}


export default withRouter(StudySidebar);
