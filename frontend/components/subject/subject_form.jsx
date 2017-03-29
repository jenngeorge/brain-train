import React from 'react';
import { Link, Redirect } from 'react-router';

class SubjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.subjectId ? this.props.subjects[this.props.subjectId].title : "",
			changedId: null
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

		let that = this;

		if (this.props.formType === "create"){
			let subject = {
				title: this.state.title,
				user_id: this.props.currentUserId
			};

			this.props.createSubject({subject}).then(
				(createdSubject)=> {
					that.setState({changedId: createdSubject.id});
					that.props.receiveSubject(createdSubject);
				},
				(err) => that.props.receiveErrors(err.responseJSON)
			);
		} else {
			let subject = {
				title: this.state.title
			};

			this.props.updateSubject({subject}, this.props.subjectId).then(
				(updatedSubject)=> {
					that.setState({changedId: updatedSubject.id});
					that.props.receiveSubject(updatedSubject);
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
		let that = this;
		let deletedId = this.props.subjectId;
		let allSubjectIds = this.props.allSubjectIds;
		this.props.deleteSubject(this.props.subjectId)
			.then(() => that.props.removeSubject(deletedId),
						err => that.props.receiveErrors(err.responseJSON))
						.then(()=> {
							let idx = allSubjectIds.indexOf(deletedId);
							allSubjectIds.splice(idx, 1);
							that.setState({changedId: allSubjectIds[0]});
							});
	}

	render() {
		let changedId = this.state.changedId;
		if (changedId && this.props.subjects[changedId]){
			return(
				<Redirect to={`/library/${changedId}`} />
			);
		} else {
			let deleteButton;
			if (this.props.formType === "update"){
				deleteButton = (
					<button onClick={this.handleDelete}>
						Delete
					</button>
				);
			}

			return (
				<div className="subject-form-container">
					<form onSubmit={this.handleSubmit}>
						{this.renderErrors()}
						<label> Title:
							<input type="text"
								value={this.state.title}
								onChange={this.update("title")}
								className="subject-input" />
						</label>
						<button><input type="submit" value="Submit" /></button>
						<button onClick={this.props.toggleSubjectForm}>cancel</button>
					</form>
					{deleteButton}
				</div>
			);
		}
	}

}

export default SubjectForm;
