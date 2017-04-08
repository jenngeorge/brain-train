import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class StudyCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentCardIndex: 0,
      flipped: false
		};
		this.flipCard = this.flipCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
	}

  flipCard(){
    this.setState({flipped: !this.state.flipped});
  }

  nextCard(){
    let nextIndex = (this.state.currentCardIndex + 1) % Object.keys(this.props.cards).length;
    this.setState({currentCardIndex: nextIndex});
  }

  prevCard(){
    let prevIndex = (this.state.currentCardIndex - 1);
    if (prevIndex < 0){
      prevIndex = Object.keys(this.props.cards).length + prevIndex;
    }
    this.setState({currentCardIndex: prevIndex});
  }

  render(){
    let cardIndex = Object.keys(this.props.cards)[this.state.currentCardIndex];
    let currentCard = this.props.cards[cardIndex] || {};
    return(
      <section className="study-card-container">
        <div className={this.state.flipped ? "flip-container-flipped" : "flip-container"}>
          <div className="flipper">
            <div className="front">
              <h2>
                {currentCard.question}
              </h2>
            </div>
            <div className="back">
              <h2>
                {currentCard.answer}
              </h2>
            </div>
          </div>
        </div>
        <button onClick={this.flipCard}>
          {this.state.flipped ? "See Question" : "See Answer"}
        </button>
        <button onClick={this.nextCard}>
          Next Card
        </button>
        <button onClick={this.prevCard}>
          Prev Card
        </button>
      </section>
    );
  }
}

export default StudyCard;
