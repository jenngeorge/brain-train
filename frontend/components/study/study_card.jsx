import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class StudyCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentCardIndex: 0,
      flipped: false,
			direction: "next",
			priorCardId: null
		};
		this.flipCard = this.flipCard.bind(this);
		this.currentCard = this.currentCard.bind(this);
		this.updateCurrentCardScore = this.updateCurrentCardScore.bind(this);
		this.cardClassName = this.cardClassName.bind(this);
	}

	currentCard(){
		let cardIndex = Object.keys(this.props.cards)[this.state.currentCardIndex];
		return this.props.cards[cardIndex] || {};
	}

	updateCurrentCardScore(score){
		let currentCard = this.currentCard();
		let card_score = {card_score: {score: score}};
		this.props.updateCardScore(card_score, currentCard.card_score.id);
		this.props.getCardScores();
	}

  flipCard(){
    this.setState({flipped: !this.state.flipped});
  }

	skipCards(direction){

		const nextIndex = (currentIndex) => (
			(currentIndex + 1) % Object.keys(this.props.cards).length
		);

		const prevIndex = (currentIndex) => {
			let index = (currentIndex - 1);
			if (index < 0){
	      return Object.keys(this.props.cards).length + index;
	    }
			return index;
		}

		let priorCard = this.currentCard();
		let newIndex;
		if (direction === "next"){
			newIndex = nextIndex(this.state.currentCardIndex);
		} else {
			newIndex = prevIndex(this.state.currentCardIndex);
		}

		let newCard = this.props.cards[Object.keys(this.props.cards)[newIndex]]

		while (!this.props.chosenScores.includes(`${newCard.card_score.score}`)){
			if (direction === "next"){
				newIndex = nextIndex(newIndex)
				newCard = this.props.cards[Object.keys(this.props.cards)[newIndex]];
			} else {
				newIndex = prevIndex(newIndex)
				newCard = this.props.cards[Object.keys(this.props.cards)[newIndex]];
			}
		}

		if (newCard === priorCard){
			this.setState({flipped: false});
			return;
		} else {
			this.setState({flipped: false},
				this.setState({currentCardIndex: newIndex,
					direction: direction,
					priorCardId: priorCard.id}));
		}
	}

	cardClassName(currentCard, cardId){
		let priorCardId = this.state.priorCardId;
		if(cardId === priorCardId){
			return `hidden-card-${this.state.direction}`;
		} else if (cardId === currentCard.id){
			return 'current-card';
		} else {
			return 'hidden-card';
		}
	}


  render(){

		if (this.state.noCards){
			return (
				<section className="study-card-container">
					<h3>
						There are no cards left with scores of
						{this.props.chosenScores.join(", or ")}.
						Try selecting different card
						scores in the sidebar!
					</h3>
				</section>
			)
		}


    let currentCard = this.currentCard();
		let currentCardScore = currentCard.card_score.score;

		let scoreLis = [0, 1, 2, 3].map(score => (
			<li key={score} onClick={this.updateCurrentCardScore.bind(this, score)}
				className={currentCardScore === score ? "current-score": ""}>
				<h1>
					{score}
				</h1>
			</li>
		))

		let cardLis = Object.keys(this.props.cards).map(key => {
			let card = this.props.cards[key];

			return(
				<li key={`${key}${card.user_id}`}
					className={this.cardClassName(currentCard, card.id)}>
					<div className={this.state.flipped ? "flip-container-flipped" : "flip-container"}>
	          <div className="flipper">
	            <div className="front">
	              <h5>
	                {card.question}
	              </h5>
	            </div>
	            <div className="back">
	              <h5>
	                {card.answer}
	              </h5>
	            </div>
	          </div>
	        </div>
				</li>
			);
		});

    return(
      <section className="study-card-container">
				<ul>
					{cardLis}
				</ul>

				<section className="study-buttons">
					<button onClick={this.skipCards.bind(this, "prev")}>
						Prev Card
					</button>
					<button onClick={this.flipCard}>
						{this.state.flipped ? "See Question" : "See Answer"}
					</button>
					<button onClick={this.skipCards.bind(this, "next")}>
						Next Card
					</button>
				</section>

				<section className="card-scores">
					<ul>
						{scoreLis}
					</ul>
				</section>
      </section>
    );
  }
}

export default StudyCard;
