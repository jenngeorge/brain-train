import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CardForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			answer: this.props.card.answer || "",
			question: this.props.card.question || "",
      deck_id: this.props.deckId,
			answer_image: null,
			answer_image_url: this.props.card.answer_image || "",
			question_image: null,
			question_image_url: this.props.card.question_image || ""
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

	updateFile(type, e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
			if (type === 'answer'){
				this.setState({ answer_image: file, answer_image_url: fileReader.result });
			} else {
				this.setState({ question_image: file, question_image_url: fileReader.result });
			}
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


	handleSubmit(e){
		e.preventDefault();
		let that = this;
		let formData = new FormData();
		formData.append("card[answer]", this.state.answer)
		formData.append("card[question]", this.state.question)
		formData.append("card[deck_id]", this.state.deck_id)
		formData.append("card[answer_image]", this.state.answer_image)
		formData.append("card[question_image]", this.state.question_image)

		if (this.props.formType === "create"){
			this.props.createCard(formData).then(
				(createdCard)=> {
					that.props.toggleCardForm();
					that.props.receiveCard(createdCard);
				},
				(err) => that.props.receiveErrors(err.responseJSON)
			);
		} else {
			this.props.updateCard(formData, this.props.card.id).then(
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
							<input type="file" onChange={this.updateFile.bind(this, 'question')}/>
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
							<input type="file" onChange={this.updateFile.bind(this, 'answer')}/>
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
