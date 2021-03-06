import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

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
					that.setState({changedId: createdSubject.id}, ()=> {
						that.props.receiveSubject(createdSubject);
					});
				},
				(err) => {
          that.props.receiveErrors(err.responseJSON)
        }
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
			<p>
        {this.props.errors[0]}
			</p>
		);
	}

	handleDelete(){
		let that = this;
		let deletedId = this.props.subjectId;
		let allSubjectIds = this.props.allSubjectIds;

		this.props.deleteSubject(this.props.subjectId)
			.then(() => that.props.removeSubject(deletedId),
						err => that.props.receiveErrors(err.responseJSON));
	}

	render() {
		let changedId = this.state.changedId;
		if (changedId && this.props.subjects[changedId]){
			this.props.toggleSubjectForm();
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
					<form onSubmit={this.handleSubmit} className="subject-form">

						<label> Title:
							<input type="text"
								value={this.state.title}
								onChange={this.update("title")}
								className="subject-input" />
						</label>
            {this.renderErrors()}
						<button><input type="submit" value="Submit" /></button>
					</form>
					{deleteButton}
				</div>
			);
		}
	}

}

export default SubjectForm;
