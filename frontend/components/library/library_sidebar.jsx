import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import SubjectIndexContainer from '../subject/subject_index_container';
import SubjectFormContainer from '../subject/subject_form_container';

class LibrarySidebar extends React.Component{
  constructor(){
    super();
    this.state = {
      formOpen: false
    };

    this.toggleSubjectForm = this.toggleSubjectForm.bind(this);
  }

  toggleSubjectForm() {
    this.setState({ formOpen: !this.state.formOpen });
  }

  subjectForm(){
    if (this.state.formOpen){
      return(
        <SubjectFormContainer
          formType="create"
          toggleSubjectForm={this.toggleSubjectForm}/>
      );
    }
  }

  render(){
    return(
      <section className="sidebar-container">
        <h1>Subjects</h1>
        <div>subject searchbar</div>
        <button onClick={this.toggleSubjectForm}>
          add subject
        </button>
        {this.subjectForm()}

        <SubjectIndexContainer />
      </section>
    );
  }
}


export default withRouter(LibrarySidebar);
