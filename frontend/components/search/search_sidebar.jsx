import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class SearchSidebar extends React.Component{
  constructor(){
    super();
    this.state={
      filter: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount(){
    this.props.fetchSubjects({search:""});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSubjects({search: this.state.filter});
  }

  render(){
    return(
      <section className="sidebar-container">
        <h1>Search Subjects</h1>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input type="text"
            value={this.state.filter}
            onChange={this.update("filter")}/>

          <button><input type="submit" value="Search" /></button>
        </form>
      </section>
    );
  }
}


export default withRouter(SearchSidebar);
