import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class StudySidebar extends React.Component{
  constructor(props){
    super(props);

    this.state = {0: true, 1: true, 2: true, 3: true};
    this.updateScore = this.updateScore.bind(this)
  }

  updateScore(score){
    this.setState({[score]: !this.state[score]}, ()=> {
      const scores = Object.keys(this.state).filter(key => (this.state[key] === true))
      this.props.updateChosenScores(scores)
    })
  }

  render(){
    const scoreLis = [0, 1, 2, 3].map(score => (
      <li key={score} onClick={this.updateScore.bind(this, score)}>
        {score} : {this.props.cardScores[score]} cards
      </li>
    ))

    return(
      <section className="sidebar-container">
        <h1>{this.props.deck ? this.props.deck.title : ""}</h1>

        <ul className="score-list">
          {scoreLis}
        </ul>

      </section>
    );
  }
}


export default withRouter(StudySidebar);
