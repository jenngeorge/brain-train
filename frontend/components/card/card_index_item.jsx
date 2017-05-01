import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardFormContainer from './card_form_container';

class CardIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.state={
      cardFormOpen: false
    };

    this.toggleCardForm = this.toggleCardForm.bind(this);
  }

  toggleCardForm(){
    this.setState({cardFormOpen: !this.state.cardFormOpen});
  }

  cardForm(action){

  }


  render(){
    if (this.state.cardFormOpen){
      return (
        < CardFormContainer
        formType="update"
        card={this.props.card}
        toggleCardForm={this.toggleCardForm}
        deckId={this.props.card.deck_id}/>
      );
    } else {
      return(
        <div className="card-index-item">
          <div className="card-question">
              <h5>Question:</h5>
              {this.props.card.question}
          </div>
          <div className="card-answer">
            <h5>Answer:</h5>
            {this.props.card.answer}
          </div>
          <button onClick={this.toggleCardForm}>
            Edit Card
          </button>
        </div>
      );
    }
  }
}

export default withRouter(CardIndexItem);
