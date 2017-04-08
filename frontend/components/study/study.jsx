import React from 'react';
import { BrowserRouter as Router,
        Route,
        Link,
        withRouter } from 'react-router-dom';
import StudySidebar from './study_sidebar';
import StudyCard from './study_card';

class Study extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchDeck(this.props.deckId);
    this.props.fetchCards(this.props.deckId);
  }

  render(){
    return (
      <div className="study-container">
        <StudySidebar
          deck={this.props.deck || {}}/>
        <StudyCard
          cards={this.props.cards || {}}
          updateCard={this.props.updateCard}/>
      </div>
    );
  }
}


export default withRouter(Study);
