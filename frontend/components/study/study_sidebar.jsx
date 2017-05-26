import React from 'react';
import { BrowserRouter as Router,
        Route,
        Link,
        withRouter } from 'react-router-dom';
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
      <li key={score}
        onClick={this.updateScore.bind(this, score)}>
        <span className={this.props.chosenScores.includes(`${score}`) ? "" : "not-chosen"}>
          <span className={`score-${score}`}>
            {score}
          </span>
        </span>
        <h5 className="cards">
          {this.props.cardScores[score]} cards
        </h5>
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

    let topInfo;
    if (this.props.deck){
      topInfo = (
        <section>
          <Link to={`library/${deck.subject_id}`} >
            Back to Subjects
          </Link>
          <h1>{this.props.deck.title}</h1>
        </section>
      )
    }


    return(
      <section className="sidebar-container">
        {topInfo}

        {this.props.cardsLength > 0 ? scoreChart : ""}

        <ul className="score-list">
          {this.props.cardsLength > 0 ? scoreLis : ""}
        </ul>

      </section>
    );
  }
}


export default withRouter(StudySidebar);
