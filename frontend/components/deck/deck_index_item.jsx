import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeckFormContainer from './deck_form_container';

class DeckIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleStudyClick = this.handleStudyClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleStudyClick(e){
    e.stopPropagation();
    e.preventDefault();
    this.props.history.push(`/study/${this.props.deck.id}`);
  }

  handleLinkClick(e){
    e.stopPropagation();
  }

  render(){
    let editDeck;
    if (this.props.currentUserId === this.props.deck.user_id){
      editDeck = (
        <Link to={`/edit/${this.props.deck.id}`} className="edit-deck"
          onClick={this.handleLinkClick}>
          <button>
            Edit Deck
          </button>
        </Link>
      );
    }

    return(
      <div onClick={this.handleStudyClick}>
        <h2>
          {this.props.deck.title}
        </h2>
        {editDeck}
      </div>
    );

  }
}

export default withRouter(DeckIndexItem);
