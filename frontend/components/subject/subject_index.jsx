import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SubjectIndex extends React.Component{

  componentDidMount(){
    this.props.fetchSubjects();
  }

  render(){
    let subjectLis = this.props.subjectIds.map(key => (
      <Link to={`/library/${key}`} key={`subject${key}`}>
        <li >
           {this.props.subjects[key] ? this.props.subjects[key].title : ""}
        </li>
      </Link>
    ));

    return(
      <ul className="subject-index">
        {subjectLis}
      </ul>
    );

  }
}

export default withRouter(SubjectIndex);
