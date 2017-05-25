import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchSidebar from './search_sidebar';
import SearchIndex from './search_index';

class Search extends React.Component{

  componentDidMount(){
    this.props.fetchSubjects({search: ""});
    this.props.fetchDecks();
  }

  render(){

    return(
      <div className="search-container">
        < SearchSidebar
          fetchSubjects={this.props.fetchSubjects}/>
        < SearchIndex
          subjects={this.props.subjects}
          currentUser={this.props.currentUser}
          followSubject={this.props.createSubjectFollow}
          unfollowSubject={this.props.deleteSubjectFollow}
          decks={this.props.decks}/>
      </div>
    );

  }
}

export default withRouter(Search);
