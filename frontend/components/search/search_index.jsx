import React from 'react';
import SearchIndexItem from './search_index_item';

const SearchIndex = (props) => {

  let subjectLis = Object.keys(props.subjects).map(key => {
    let subject = props.subjects[key];
    return (
      <li key={key}>
        < SearchIndexItem
          subject={subject}
          followSubject={props.followSubject}
          currentUser={props.currentUser}/>
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
