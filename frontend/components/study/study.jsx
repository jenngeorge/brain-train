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
    let studyCards;
    if (Object.keys(this.props.cards).length > 0) {
      studyCards = (
        <StudyCard
          cards={this.props.cards || {}}
          updateCardScore={this.props.updateCardScore}
          createCardScore={this.props.createCardScore}
          currentUser={this.props.currentUser}/>
      );
    } else {
      if (this.props.deck && this.props.deck.user_id === currentUser.id){
        studyCards =  (
          <div className="no-study-cards">
            <h3> There aren't yet any cards in this deck! </h3>
            <Link to={`/edit/${this.props.deck.id}`}>
              <h5>
                create some here
              </h5>
            </Link>
          </div>
        )
      } else {
        studyCards = (
          <div className="no-study-cards">
            <h3> There aren't yet any cards in this deck! </h3>
          </div>);
      }
    }

    return (
      <div className="study-container">
        <StudySidebar
          deck={this.props.deck}/>
        {studyCards}
      </div>
    );
  }
}


export default withRouter(Study);
