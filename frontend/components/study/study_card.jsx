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
    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
		this.currentCard = this.currentCard.bind(this);
		this.createCurrentCardScore = this.createCurrentCardScore.bind(this);
		this.updateCurrentCardScore = this.updateCurrentCardScore.bind(this);
		this.cardClassName = this.cardClassName.bind(this);
	}

	currentCard(){
		let cardIndex = Object.keys(this.props.cards)[this.state.currentCardIndex];
		return this.props.cards[cardIndex] || {};
	}

	createCurrentCardScore(){
		let currentCard = this.currentCard();
		if (currentCard.card_score && currentCard.card_score.length === 0 ){
			let card_score = {card_score:
				{user_id: this.props.currentUser.id,
				card_id: currentCard.id}
			};
			this.props.createCardScore(card_score);
		}
	}

	updateCurrentCardScore(score){
		let currentCard = this.currentCard();
		let card_score = {card_score: {score: score}};
		this.props.updateCardScore(card_score, currentCard.card_score.id);
	}

	componentDidMount(){
		this.createCurrentCardScore();
	}

	componentDidUpdate(){
		this.createCurrentCardScore();
	}

  flipCard(){
    this.setState({flipped: !this.state.flipped});
  }

  nextCard(){
		let priorCard = this.currentCard();
    let nextIndex = (this.state.currentCardIndex + 1) % Object.keys(this.props.cards).length;
    this.setState({flipped: false},
			this.setState({currentCardIndex: nextIndex,
				direction: "next",
				priorCardId: priorCard.id}));
  }

  prevCard(){
		let priorCard = this.currentCard();
    let prevIndex = (this.state.currentCardIndex - 1);
    if (prevIndex < 0){
      prevIndex = Object.keys(this.props.cards).length + prevIndex;
    }
    this.setState({flipped: false},
			this.setState({currentCardIndex: prevIndex,
					direction: "prev",
					priorCardId: priorCard.id}));
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
    let currentCard = this.currentCard();
		let currentCardScore;
		if (currentCard.card_score){
			currentCardScore = currentCard.card_score.score;
		} else {
			currentCardScore = {};
		}

		let cardLis = Object.keys(this.props.cards).map(key => {
			let card = this.props.cards[key];

			return(
				<li key={`${key}${card.user_id}`}
					className={this.cardClassName(currentCard, card.id)}>
					<div className={this.state.flipped ? "flip-container-flipped" : "flip-container"}>
	          <div className="flipper">
	            <div className="front">
	              <h2>
	                {card.question}
	              </h2>
	            </div>
	            <div className="back">
	              <h2>
	                {card.answer}
	              </h2>
	            </div>
	          </div>
	        </div>
				</li>
			);
		}
	);

    return(
      <section className="study-card-container">
				<ul>
					{cardLis}
				</ul>

        <button onClick={this.flipCard}>
          {this.state.flipped ? "See Question" : "See Answer"}
        </button>
        <button onClick={this.nextCard}>
          Next Card
        </button>
        <button onClick={this.prevCard}>
          Prev Card
        </button>

				<section className="card-scores">
					<ul>
						<li onClick={this.updateCurrentCardScore.bind(this, 0)}
							className={currentCardScore === 0 ? "current-score": ""}>
							0
						</li>
						<li onClick={this.updateCurrentCardScore.bind(this, 1)}
							className={currentCardScore === 1 ? "current-score": ""}>
							1
						</li>
						<li onClick={this.updateCurrentCardScore.bind(this, 2)}
							className={currentCardScore === 2 ? "current-score": ""}>
							2
						</li>
						<li onClick={this.updateCurrentCardScore.bind(this, 3)}
							className={currentCardScore === 3 ? "current-score": ""}>
							3
						</li>
					</ul>
				</section>
      </section>
    );
  }
}

export default StudyCard;
