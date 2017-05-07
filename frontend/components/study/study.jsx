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
    this.checkCardScores = this.checkCardScores.bind(this);
  }

  componentWillMount(){
    this.props.fetchDeck(this.props.deckId);
    this.props.fetchCards(this.props.deckId).then(this.getCardScores);
  }

  getCardScores(){
    const scores = {};
    const that = this;
    Object.keys(this.props.cards).forEach(key => {
      let scoresKey = that.props.cards[key].card_score.score
      if (!scores[scoresKey]){
        scores[scoresKey] = 1
      } else {
        scores[scoresKey] += 1;
      }
    })

    for (let i = 0; i < 4; i++){
      if (!scores[i]){
        scores[i] = 0;
      }
    }

    const cb = (includesScores) => {
      this.setState({cardScores: scores, cardsWithScores: includesScores});
    }

    this.checkCardScores(this.state.chosenScores, scores, cb)
  }

  checkCardScores(chosenScores, cardScores, cb){
    let includesScores = false;
    chosenScores.forEach(chosenScore => {
      if (cardScores[chosenScore] !== 0){
        includesScores = true;
      }
    });

    cb(includesScores);
  }

  updateChosenScores(scores){
    const cb = (includesScores) => {
      this.setState({chosenScores: scores, cardsWithScores: includesScores})
    }

    this.checkCardScores(scores, this.state.cardScores, cb);
  }

  updateCardScore(card_score, id){
    this.props.updateCardScore(card_score, id)
    .then(this.getCardScores);
  }

  render(){
    let studyCards;
    if (Object.keys(this.props.cards).length === 0) {
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
    } else if (!this.state.cardsWithScores){
      studyCards = (
        <div className="no-study-cards">
          <h3>
            There aren't any cards with scores
            of {this.state.chosenScores.join(", or ")}.
          </h3>
          <h3>
            Try selecting different scores in the sidebar!
          </h3>
        </div>)
    } else {
      studyCards = (
        <StudyCard
          cards={this.props.cards || {}}
          updateCardScore={this.updateCardScore}
          currentUser={this.props.currentUser}
          chosenScores={this.state.chosenScores}/>
      );
    }

    return (
      <div className="study-container">
        <StudySidebar
          deck={this.props.deck}
          updateChosenScores={this.updateChosenScores}
          cardScores={this.state.cardScores}
          cardsLength={Object.keys(this.props.cards).length}
          chosenScores={this.state.chosenScores}/>
        {studyCards}
      </div>
    );
  }
}


export default withRouter(Study);
