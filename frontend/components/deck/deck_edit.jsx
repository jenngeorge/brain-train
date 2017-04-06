import React from 'react';
import { Link } from 'react-router-dom';
import DeckFormContainer from './deck_form_container';

class DeckEdit extends React.Component{
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

  componentDidUpdate(nextProps){
    if (this.props.deckId != nextProps.deckId ){
      this.props.fetchDeck(this.props.deckId);
    }
  }

  componentDidMount(){
    if (!this.props.deck ){
      this.props.fetchDeck(this.props.deckId);
    }

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

// TODO: Add card form
// TODO: cards index with edit on card index items

  render(){
    let deck = this.props.deck || {};
    return(
      <div className="deck-index-item">
        {deck.title}
        <button onClick={this.toggleDeckForm}>
          Edit Deck Info
        </button>
        {this.deckForm()}

      </div>
    );

  }
}

export default DeckEdit;
