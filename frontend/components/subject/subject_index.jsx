import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SubjectIndex extends React.Component{

  componentDidMount(){
    this.props.fetchSubjects();
  }

  render(){
    const that = this;
    let subjectLis = Object.keys(this.props.subjects).map(key => {
      return (<Link to={`/library/${key}`}
        key={`subject${key}${this.props.subjects[key].title}`}>
        <li className={`${key}` === this.props.selectedSubject ? "selected-subject" : ""}>
           {this.props.subjects[key].title}
        </li>
      </Link>);
    });

    return(
      <ul className="subject-index">
        {subjectLis}
      </ul>
    );

  }
}

export default withRouter(SubjectIndex);
