import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Modal from 'react-modal';

import SessionForm from '../session/session_form';

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      modalOpen: false,
      formType: ""
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.switchForm = this.switchForm.bind(this);

    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(){
    this.props.signout().then(this.props.history.push("/"));
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal(formType) {
    this.setState({ modalOpen: true, formType: formType });
  }

  switchForm(){
    if (this.state.formType === "signin"){
      this.setState({formType: "signup"});
    } else {
      this.setState({formType: "signin"});
    }
  }



  render(){

    let sessionButtons = () => {
      if (this.props.session.currentUser){
        return(
          <div className="signout-button">
            <button onClick={this.handleSignout}>Sign Out</button>
            <Link to={`/users/${this.props.session.currentUser.id}`}>
              Me
            </Link>
          </div>
        );
      } else {
        return(
          <div className="signin-buttons">
            <button onClick={this.openModal.bind(this, "signin")}>Sign in</button>
            <button onClick={this.openModal.bind(this, "signup")}>Sign up</button>
          </div>
        );
      }
    };

    return(
        <div className="nav-container">
          {sessionButtons()}

            <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Modal">
              <SessionForm
                formType={this.state.formType}
                signout={this.props.signout}
                signin={this.props.signin}
                signup={this.props.signup}
                switchForm={this.switchForm}
                closeModal={this.closeModal}
                errors={this.props.errors}
                clearErrors={this.props.clearErrors}
                currentUser={this.props.session.currentUser}
              />
          </Modal>
        </div>
      );
  }

}

export default withRouter(Header);
