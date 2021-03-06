import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
    };

		this.handleSubmit = this.handleSubmit.bind(this);
		this.switchFormLink = this.switchFormLink.bind(this);
	}

	componentDidUpdate(nextProps) {
		if (this.props.formType !== nextProps.formType){
			this.props.clearErrors();
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {email: this.state.email, password: this.state.password};
		if (this.props.formType === "signup"){
			this.props.signup({user})
		} else {
			this.props.signin({user})
		}
	}

	switchFormLink() {
		return (
			<span onClick={this.props.switchForm}>
				{this.props.formType === "signup" ? "sign in" : "sign up"}
			</span>
		);
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
		return (
			<div className="signin-form-container">
				<i className="modal-close fa fa-times"
					aria-hidden="true"
					onClick={this.props.closeModal} />
				<form onSubmit={this.handleSubmit} className="signin-form-box">
					<br/>
					<h3>
						Please {this.props.formType} or {this.switchFormLink()}
					</h3>
					{this.renderErrors()}
					<div className="signin-form">
						<br/>
						<label> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="signin-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="signin-input" />
						</label>
						<br/>
            <div className="modal-buttons">
  						<button><input type="submit" value="Submit" /></button>
              <button onClick={this.props.guestLogin}>
                Guest Login
              </button>
            </div>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
