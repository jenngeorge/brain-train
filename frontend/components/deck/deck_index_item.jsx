import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import DeckFormContainer from './deck_form_container';

class DeckIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleStudyClick = this.handleStudyClick.bind(this);
  }

  handleStudyClick(){
    this.props.history.push(`/study/${this.props.deck.id}`);
  }


  render(){
    let editDeck;
    if (this.props.currentUserId === this.props.deck.user_id){
      editDeck = (
        <Link to={`/edit/${this.props.deck.id}`}>
          Edit Deck
        </Link>
      );
    }

    return(
      <div className="deck-index-item">
        <h2 onClick={this.handleStudyClick}>
          {this.props.deck.title}
        </h2>
        {editDeck}
      </div>
    );

  }
}

export default withRouter(DeckIndexItem);
