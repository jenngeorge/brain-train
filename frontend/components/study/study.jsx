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

    this.state = {chosenScores: ["0", "1", "2", "3"],
        cardsWithScores: true,
        cardScores: {}};
    this.updateChosenScores = this.updateChosenScores.bind(this);
    this.updateCardScore = this.updateCardScore.bind(this);
    this.getCardScores = this.getCardScores.bind(this);
  }

  componentWillMount(){
    this.props.fetchDeck(this.props.deckId);
    this.props.fetchCards(this.props.deckId).then(this.getCardScores);
  }

  getCardScores(){
    const scores = {}
    Object.keys(this.props.cards).forEach(key => {
      let scoresKey = this.props.cards[key].card_score.score
      if (!scores[scoresKey]){
        scores[scoresKey] = 1
      } else {
        scores[scoresKey] += 1;
      }
    })

    this.setState({cardScores: scores})
  }

  updateChosenScores(scores){
    let includesScores = false;

    scores.forEach(score => {
      if (Object.keys(this.state.cardScores).indexOf(score) !== -1){
        includesScores = true;
      }
    })

    this.setState({chosenScores: scores, cardsWithScores: includesScores});
  }

  updateCardScore(card_score, id){
    // debugger
    this.props.updateCardScore(card_score, id).then(this.getCardScores);
  }

  render(){
    let studyCards;

    if (!this.state.cardsWithScores){
      studyCards = (
        <div className="no-study-cards">
          <h3>
            There aren't any cards with scores
            of {this.state.chosenScores.join(", or ")}.
          </h3>
          <h3>
            Try selecting different scores in the sidebar!
          </h3>
        </div>
      )

    } else if (Object.keys(this.props.cards).length > 0) {
      studyCards = (
        <StudyCard
          cards={this.props.cards || {}}
          updateCardScore={this.updateCardScore}
          currentUser={this.props.currentUser}
          chosenScores={this.state.chosenScores}
          getCardScores={this.getCardScores}/>
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
          deck={this.props.deck}
          updateChosenScores={this.updateChosenScores}
          cardScores={this.state.cardScores}/>
        {studyCards}
      </div>
    );
  }
}


export default withRouter(Study);
