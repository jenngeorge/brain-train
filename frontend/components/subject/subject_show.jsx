import React from 'react';
import {withRouter, Link, Redirect} from 'react-router-dom';
import SubjectFormContainer from './subject_form_container';
import DeckIndexContainer from '../deck/deck_index_container';
import DeckFormContainer from '../deck/deck_form_container';

class SubjectShow extends React.Component {
	constructor(props) {
		super(props);
    this.state= {
      subjectFormOpen: false,
			deckFormOpen: false,
			redirect: false
    };

    this.subjectForm = this.subjectForm.bind(this);
    this.toggleSubjectForm = this.toggleSubjectForm.bind(this);
		this.toggleDeckForm = this.toggleDeckForm.bind(this);
		this.unfollowSubject = this.unfollowSubject.bind(this);
  }

  componentWillMount(){
    this.props.fetchSubject(this.props.subjectId);
		this.props.fetchDecks(this.props.subjectId);
  }

  componentDidUpdate(nextProps){
		if (nextProps.subjectId !== this.props.subjectId){
			this.setState({redirect: false});
			this.props.fetchSubject(this.props.subjectId);
			this.props.fetchDecks(this.props.subjectId);
		}
	}

	unfollowSubject(){
		this.props.deleteSubjectFollowIndex(this.props.subjectId)
			.then(() => {
				if (Object.keys(this.props.subjects).length > 0) {
					this.setState({redirect: Object.keys(this.props.subjects)[0]});
				} else {
					this.setState({redirect: "noSubjects"});
				}
			});
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
				subjectId={this.props.subjectId}
				currentUserId={this.props.currentUser.id}/>
			);
		}
	}

	render() {
    if (!this.props.subjects[this.props.subjectId]){
      return <Redirect to={`/library`} />;
    }

		if (this.state.redirect) {
			if (this.state.redirect === "noSubjects") {
				return <Redirect to={`/library`} />;
			} else {
				return <Redirect to={`/library/${this.state.redirect}`} />;
			}
		}

    let subject = this.props.subject || {};
		let subjectButtons;
		if (subject.user_id === this.props.currentUser.id){
			subjectButtons = (
				<section className="subject-buttons">
					<button onClick={this.toggleSubjectForm} >
						Edit
					</button>
					{this.subjectForm()}

					<button onClick={this.toggleDeckForm}>New Deck</button>
					{this.deckForm()}
				</section>);
		}
    return(
      <section className="subject-show-container">
        <h1>{subject.title}</h1>
				<button onClick={this.unfollowSubject} className="subject-button">
					Unfollow
				</button>
				{subjectButtons}

				<DeckIndexContainer
					subject={this.props.subject}
					subjectId={this.props.subjectId} />
			</section>
    );
	}

}

export default withRouter(SubjectShow);
