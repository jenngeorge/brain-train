import React from 'react';
import SearchIndexItem from './search_index_item';

const SearchIndex = (props) => {

  let subjectLis = Object.keys(props.subjects).map(key => {
    let subject = props.subjects[key];
    return (
      <li key={key} className="search-index-item">
        < SearchIndexItem
          subject={subject}
          subjectId={key}
          followSubject={props.followSubject}
          currentUser={props.currentUser}
          followSubject={props.followSubject}
          unfollowSubject={props.unfollowSubject}
          decks={props.decks}/>
      </li>
    );
  });

  return(
      <ul className="search-index">
        {subjectLis}
      </ul>
    );
};


export default SearchIndex;
