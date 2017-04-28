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

    const deckPreviews = this.props.subject.deckIds.map(id => (
      <li key={id}>
        {this.props.decks[id].title}
      </li>
    ));

    return(
      <div>
        <h2>{this.props.subject.title}</h2>
        {this.followButton()}
        <div onClick={this.toggleOpen}>toggle details</div>
        <section className={this.state.open ? "show-details" : "hide-details"}>
          <h3>Decks</h3>
          {deckPreviews}
        </section>
      </div>
    );
  }
}


export default withRouter(SearchIndexItem);
