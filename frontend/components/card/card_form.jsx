import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CardForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			answer: this.props.card.answer || "",
			question: this.props.card.question || "",
      deck_id: this.props.deckId,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
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
    let card = this.state;
		let that = this;

		if (this.props.formType === "create"){
			this.props.createCard({card}).then(
				(createdCard)=> {
					that.props.toggleCardForm();
					that.props.receiveCard(createdCard);
				},
				(err) => that.props.receiveErrors(err.responseJSON)
			);
		} else {
			this.props.updateCard({card}, this.props.card.id).then(
				(updatedCard)=> {
          that.props.toggleCardForm();
					that.props.receiveCard(updatedCard);
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

	handleDelete(){
		this.props.deleteCard(this.props.card.id);
	}

	render() {

		let deleteButton;
		if (this.props.formType === "update"){
			deleteButton = (
				<button onClick={this.handleDelete}>
					Delete
				</button>
			);
		}

		return (
			<div className="card-form-container">
				<form onSubmit={this.handleSubmit}>
					{this.renderErrors()}
					<label> Question:
						<input type="text"
							value={this.state.question}
							onChange={this.update("question")}
							className="card-input" />
					</label>
					<label> Answer:
						<input type="text"
							value={this.state.answer}
							onChange={this.update("answer")}
							className="card-input" />
					</label>
					<button><input type="submit" value="Submit" /></button>
					<button onClick={this.props.toggleCardForm}>cancel</button>
				</form>
				{deleteButton}
			</div>
		);

	}

}

export default CardForm;
