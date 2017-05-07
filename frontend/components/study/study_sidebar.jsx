import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import PieChart from 'react-simple-pie-chart';

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

    let scoreChart;
    if (Object.keys(this.props.cardScores).length > 0){
      const score0 = (this.props.cardScores[0] / this.props.cardsLength) * 100;
      const score1 = (this.props.cardScores[1] / this.props.cardsLength) * 100;
      const score2 = (this.props.cardScores[2] / this.props.cardsLength) * 100;
      const score3 = (this.props.cardScores[3] / this.props.cardsLength) * 100;

      scoreChart = (
        <PieChart
          slices={[
            {
              color: '#FF0D00',
              value: score0,
            },
            {
              color: '#FF9800',
              value: score1,
            },
            {
              color: '#00CD19',
              value: score2,
            },
            {
              color: '#0031B6',
              value: score3,
            },
          ]}
        />)
    }


    return(
      <section className="sidebar-container">
        <h1>{this.props.deck ? this.props.deck.title : ""}</h1>

        {scoreChart}

        <ul className="score-list">
          {scoreLis}
        </ul>

      </section>
    );
  }
}


export default withRouter(StudySidebar);
