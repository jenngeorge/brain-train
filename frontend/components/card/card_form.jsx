import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CardForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			answer: this.props.card.answer || "",
			question: this.props.card.question || "",
      deck_id: this.props.deckId,
			question_image: this.props.card.question_image || "",
			answer_image: this.props.card.answer_image || ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.uploadImage = this.uploadImage.bind(this);
	}

	componentWillMount(){
		this.props.clearErrors();
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	uploadImage(type, e) {
		e.preventDefault();
		let that = this;
		debugger
		cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
			if(!error){
				// this.props.postImage(results[0]);
				debugger
				if (type === "question"){
					that.setState({question_image: results[0].secure_url})
				} else {
					that.setState({answer_image: results[0].secure_url})
				}
			}
		})
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

	handleDelete(e){
		e.preventDefault();
		this.props.deleteCard(this.props.card.id);
		this.props.toggleCardForm();
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

		if (this.props.card){
			return (
				<div className="card-form-container">
					<form onSubmit={this.handleSubmit} className="card-index-item">
						{this.renderErrors()}
						<div className="card-question">
							<label>
								<h5>
									Question:
								</h5>
								<input type="text"
									value={this.state.question}
									onChange={this.update("question")}
									className="card-input" />
							</label>
							<img src={this.state.question_image ? this.state.question_image : ""} />
							<button onClick={this.uploadImage.bind(this, "question")}>
								Upload Image
							</button>
						</div>
						<div className="card-answer">
							<label>
								<h5>
									Answer:
								</h5>
								<textarea rows="5" wrap="hard"
									value={this.state.answer}
									onChange={this.update("answer")}
									className="card-input" />
							</label>
							<img src={this.state.answer_image ? this.state.answer_image : ""} />
							<button onClick={this.uploadImage.bind(this, "answer")}>
								Upload Image
							</button>
						</div>
						<div className="card-form-buttons">
							<button><input type="submit" value="Submit" /></button>
							<button onClick={this.props.toggleCardForm}>Cancel</button>
							{deleteButton}
						</div>
					</form>
				</div>
			);
		} else {
			return (<div></div>);
		}

	}

}

export default CardForm;
