import { connect } from 'react-redux';
import { fetchDeck } from '../../actions/deck_actions';
import { updateCard,
         fetchCards,
         createCardScore,
         updateCardScore } from '../../actions/card_actions';

import Study from './study.jsx';


const mapStateToProps = (state, props) => ({
  deckId: props.match.params.deckId,
  cards: state.cards.byId,
  deck: state.decks.byId[props.match.params.deckId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCards: deckId => dispatch(fetchCards(deckId)),
  updateCard: (card, cardId) => dispatch(updateCard(card, cardId)),
  fetchDeck: deckId => dispatch(fetchDeck(deckId)),
  createCardScore: cardScore => dispatch(createCardScore(cardScore)),
  updateCardScore: (cardScore, id) => dispatch(updateCardScore(cardScore, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);
