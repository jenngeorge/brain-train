import React from 'react';
import { Link, Redirect } from 'react-router';

class DeckForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.deck.title || "",
      subject_id: this.props.subjectId,
      user_id: this.props.currentUserId
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount(){
		this.props.clearErrors();
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
    let deck = this.state;
		let that = this;

		if (this.props.formType === "create"){
			this.props.createDeck({deck}).then(
				(createdDeck)=> {
					that.props.toggleDeckForm();
					that.props.receiveDeck(createdDeck);
					that.props.fetchSubject(createdDeck.subject_id);
				},
				(err) => that.props.receiveErrors(err.responseJSON)
			);
		} else {
			this.props.updateDeck({deck}, this.props.deck.id).then(
				(updatedDeck)=> {
          that.props.toggleDeckForm();
					that.props.fetchSubject(updatedDeck.subject_id);
					that.props.fetchSubject(that.props.subjectId);
				},
				err => that.props.receiveErrors(err.responseJSON)
			);
		}
	}

	renderErrors() {
		return(
			<ul>
				{Object.keys(this.props.errors).map((error, i) => (
					<li key={`error-${i}`}>
						{`${error} ${this.props.errors[error][0]}`}
					</li>
				))}
			</ul>
		);
	}

	render() {
    let dropdownSubjectOptions = Object.keys(this.props.subjects).map(key => (
      <option key={key} value={key} >
        {this.props.subjects[key].title}
      </option>
    ));

		return (
			<div className="deck-form-container">
				<form onSubmit={this.handleSubmit}>
					{this.renderErrors()}
					<label> Title:
						<input type="text"
							value={this.state.title}
							onChange={this.update("title")}
							className="subject-input" />
					</label>
          <label> Subject:
						<select onChange={this.update("subject_id")} value={this.props.subjectId}>
              {dropdownSubjectOptions}
						</select>
					</label>
					<button><input type="submit" value="Submit" /></button>
					<button onClick={this.props.toggleDeckForm}>cancel</button>
				</form>
			</div>
		);

	}

}

export default DeckForm;
