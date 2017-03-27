import React from 'react';
import { Link } from 'react-router-dom';
import DeckFormContainer from './deck_form_container';

class DeckIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state={
      deckFormOpen: false
    };

    this.toggleDeckForm = this.toggleDeckForm.bind(this);
  }

  toggleDeckForm(){
    this.setState({deckFormOpen: !this.state.deckFormOpen});
  }

  deckForm(){
    if (this.state.deckFormOpen){
      return (
        < DeckFormContainer
        formType="update"
        deck={this.props.deck}
        toggleDeckForm={this.toggleDeckForm}
        subjectId={this.props.deck.subject_id}/>
      );
    }
  }


  render(){

    return(
      <div className="deck-index-item">
        <Link to={`/study/${this.props.deck.id}`}>
          {this.props.deck.title}
        </Link>
        <button onClick={this.toggleDeckForm}>
          Edit Deck
        </button>
        {this.deckForm()}
      </div>
    );

  }
}

export default DeckIndexItem;
