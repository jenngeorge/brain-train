import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentDidUpdate(prevProps){
    if (this.props.session.currentUser && !prevProps.session.currentUser){
      window.currentUser = this.props.session.currentUser;
      this.setState({modalOpen: false}, this.props.history.push("/library/"));
    }
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

  guestLogin(e){
    e.preventDefault();
    this.props.signin({user: {email: "guest@email.com", password: "password"}}).then(()=> {
      if (this.props.session.currentUser){
        window.currentUser = this.props.session.currentUser;
        this.setState({modalOpen: false})
        this.props.history.push("/library/")
      }
    });
  }

  render(){
    if (!this.props.session.currentUser){
      return(
        <span className="signin-buttons">
          <button onClick={this.guestLogin}>
            Guest Login
          </button>
          <button onClick={this.openModal.bind(this, "signin")}>
            Sign in
          </button>
          <button onClick={this.openModal.bind(this, "signup")}>
            Sign up
          </button>

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
                errors={this.props.errors}
                clearErrors={this.props.clearErrors}
                currentUser={this.props.session.currentUser}
                guestLogin={this.guestLogin}
              />
          </Modal>
        </span>
      );
    } else {
      return(
        <div className="header-container cf">
          <Link to="/welcome">
            <span className="logo button">
              BrainTrain
            </span>
          </Link>
          <Link to="/library">
            <span className="header-links button">
              Library
            </span>
          </Link>
          <Link to="/search">
            <span className="header-links button">
              Subjects
            </span>
          </Link>
          <span className="signout-button">
            <button onClick={this.handleSignout}>Sign Out</button>
          </span>
        </div>
      );
    }
  }
}

export default withRouter(Header);
