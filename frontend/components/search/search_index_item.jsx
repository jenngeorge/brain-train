import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchIndexItem extends React.Component {
  constructor(){
    super();

    this.state = {
      open: false
    };

    this.followSubject = this.followSubject.bind(this);
    this.unfollowSubject = this.unfollowSubject.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  followSubject(){
    this.props.followSubject(this.props.subjectId);
  }

  unfollowSubject(){
    this.props.unfollowSubject(this.props.subjectId);
  }

  toggleOpen(){
    this.setState({open: !this.state.open});
  }

  followButton(){
    if (this.props.subject.followId){
      return (
        <button onClick={this.unfollowSubject}>
          Unfollow
        </button>
      );
    } else {
      return (
        <button onClick={this.followSubject}>
          Follow
        </button>
      );
    }
  }

  render(){

    return(
      <div>
        <h2>{this.props.subject.title}</h2>
        {this.followButton()}
        <section className={this.state.open ? "show-details" : "hide-details"}>
          <p>here are some subject details including decks, etc</p>
        </section>
      </div>
    );
  }
}


export default withRouter(SearchIndexItem);
