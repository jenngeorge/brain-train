import React from 'react';
import SubjectFormContainer from './subject_form_container';
import DeckIndexContainer from '../deck/deck_index_container';
import DeckFormContainer from '../deck/deck_form_container';

class SubjectShow extends React.Component {
	constructor(props) {
		super(props);
    this.state= {
      subjectFormOpen: false,
			deckFormOpen: false
    };

    this.fetchSubject = this.fetchSubject.bind(this);
    this.subjectForm = this.subjectForm.bind(this);
    this.toggleSubjectForm = this.toggleSubjectForm.bind(this);
		this.toggleDeckForm = this.toggleDeckForm.bind(this);
  }

  componentWillMount(){
    if (!this.props.subject){
      this.fetchSubject(this.props.subjectId);
			this.props.fetchDecks(this.props.subjectId);
    }
  }

  componentDidUpdate(nextProps){
    if (!nextProps.subject){
      this.fetchSubject(this.props.subjectId);
    }
		this.props.fetchDecks(this.props.subjectId);
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

	toggleDeckForm(){
		this.setState({deckFormOpen: !this.state.deckFormOpen});
	}

	deckForm(){
		if (this.state.deckFormOpen){
			return (
				< DeckFormContainer
				formType="create"
				deck={{}}
				toggleDeckForm={this.toggleDeckForm}
				subjectId={this.props.subjectId}/>
			);
		}
	}

	render() {
    let subject = this.props.subject || {};
    return(
      <section className="subject-show-container">
        {subject.title}
        <button onClick={this.toggleSubjectForm}>Edit</button>
        {this.subjectForm()}

				<button onClick={this.toggleDeckForm}>New Deck</button>
				{this.deckForm()}

				<DeckIndexContainer
					subject={this.props.subject}
					subjectId={this.props.subjectId} />
			</section>
    );
	}

}

export default SubjectShow;
