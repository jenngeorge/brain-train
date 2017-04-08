import { connect } from 'react-redux';
import { fetchDeck } from '../../actions/deck_actions';
import { updateCard, fetchCards } from '../../actions/card_actions';
import Study from './study.jsx';


const mapStateToProps = (state, props) => ({
  deckId: props.match.params.deckId,
  cards: state.cards.byId,
  deck: state.decks.byId[props.match.params.deckId]
});

const mapDispatchToProps = dispatch => ({
  fetchCards: deckId => dispatch(fetchCards(deckId)),
  updateCard: (card, cardId) => dispatch(updateCard(card, cardId)),
  fetchDeck: deckId => dispatch(fetchDeck(deckId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Study);
