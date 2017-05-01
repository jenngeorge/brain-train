import React from 'react';
import { Link } from 'react-router-dom';
import DeckFormContainer from './deck_form_container';
import CardFormContainer from '../card/card_form_container';
import CardIndexContainer from '../card/card_index_container';

class DeckEdit extends React.Component{
  constructor(props){
    super(props);
    this.state={
      deckFormOpen: false,
      cardFormOpen: false
    };

    this.toggleDeckForm = this.toggleDeckForm.bind(this);
    this.toggleCardForm = this.toggleCardForm.bind(this);
  }

  toggleDeckForm(){
    this.setState({deckFormOpen: !this.state.deckFormOpen});
  }

  toggleCardForm(){
    this.setState({cardFormOpen: !this.state.cardFormOpen});
  }

  componentDidUpdate(nextProps){
    if (this.props.deckId != nextProps.deckId ){
      this.props.fetchDeck(this.props.deckId);
      this.props.fetchCards(this.props.deckId);
    }
  }

  componentDidMount(){
    if (!this.props.deck ){
      this.props.fetchDeck(this.props.deckId);
      this.props.fetchCards(this.props.deckId);
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

  cardForm(action){
    if (this.state.cardFormOpen){
      return (
        < CardFormContainer
        formType="create"
        card={{}}
        toggleCardForm={this.toggleCardForm}
        deckId={this.props.deck.id}/>
      );
    }
  }



  render(){
    let deck = this.props.deck || {};
    return(
      <div className="deck-edit">
        <h1>
          {deck.title}
        </h1>
        <button onClick={this.toggleDeckForm}>
          Edit Deck Info
        </button>
        {this.deckForm()}
        <button onClick={this.toggleCardForm}>
          Add new card
        </button>
        {this.cardForm()}

        <CardIndexContainer/>

      </div>
    );

  }
}

export default DeckEdit;
