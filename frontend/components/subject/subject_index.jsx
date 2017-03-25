import React from 'react';
import { Link } from 'react-router-dom';

class SubjectIndex extends React.Component{

  componentDidMount(){
    this.props.fetchSubjects();
  }

  render(){
    let subjectLis = Object.keys(this.props.subjects).map(key => (
      <li key={key}>
       <Link to={`/library/${key}`}>
         {this.props.subjects[key].title}
       </Link>
      </li>
    ));

    return(
      <ul className="subject-index">
        {subjectLis}
      </ul>
    );

  }
}

export default SubjectIndex;
