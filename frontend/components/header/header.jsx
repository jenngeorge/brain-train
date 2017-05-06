import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Modal from 'react-modal';

import SessionForm from '../session/session_form';

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      modalOpen: false,
      formType: ""
    };

    this.modalStyle = {
      overlay: {zIndex: 3},
      content: {
        width: "450px",
        height: "400px",
        position: "relative",
        margin: "0 auto",
        borderRadius: "10px"
      }
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.switchForm = this.switchForm.bind(this);

    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(){
    this.props.signout().then(this.props.history.push("/welcome"));
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
          <span className="signout-button">
            <button onClick={this.handleSignout}>Sign Out</button>
          </span>
        );
      } else {
        return(
          <span className="signin-buttons">
            <button onClick={this.openModal.bind(this, "signin")}>
              Sign in
            </button>
            <button onClick={this.openModal.bind(this, "signup")}>
              Sign up
            </button>
          </span>
        );
      }
    };

    return(
        <div className="header-container cf">
          <span className="logo button">
            <Link to="/welcome">
              BrainTrain
            </Link>
          </span>
          <span className="header-links button">
            <Link to="/library">
              Library
            </Link>
          </span>
          <span className="header-links button">
            <Link to="/search">
              Subjects
            </Link>
          </span>
          {sessionButtons()}

            <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            contentLabel="Modal"
            style={this.modalStyle}>
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
