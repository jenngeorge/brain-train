import React from 'react';
import SubjectFormContainer from './subject_form_container';

class SubjectShow extends React.Component {
	constructor(props) {
		super(props);
    this.state= {
      subjectFormOpen: false
    };

    this.fetchSubject = this.fetchSubject.bind(this);
    this.subjectForm = this.subjectForm.bind(this);
    this.toggleSubjectForm = this.toggleSubjectForm.bind(this);
  }

  componentWillMount(){
    if (!this.props.subject){
      this.fetchSubject(this.props.subjectId);
    }
  }

  componentDidUpdate(nextProps){
    if (!nextProps.subject){
      this.fetchSubject(this.props.subjectId);
    }
  }

  fetchSubject(id){
    this.props.fetchSubject(id)
      .then(subject => this.props.receiveSubject(subject));
  }

  subjectForm(){
    if (this.state.subjectFormOpen){
      return (
        < SubjectFormContainer
        formType="update"
        subjectId={this.props.subjectId}
        toggleSubjectForm={this.toggleSubjectForm}/>
      );
    }
  }

  toggleSubjectForm(){
    this.setState({subjectFormOpen: !this.state.subjectFormOpen});
  }

	render() {
    let subject = this.props.subject || {};
    return(
      <div>
        {subject.title}
        <button onClick={this.toggleSubjectForm}>Edit</button>
        {this.subjectForm()}
      </div>
    );
	}

}

export default SubjectShow;
