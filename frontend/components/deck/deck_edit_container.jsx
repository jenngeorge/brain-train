import { connect } from 'react-redux';
import DeckEdit from './deck_edit';
import { fetchDeck } from '../../actions/deck_actions';
import { fetchCards } from '../../actions/card_actions';

const mapStateToProps = (state, props) => ({
  deck: state.decks.byId[props.match.params.deckId],
  deckId: props.match.params.deckId
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: deckId => dispatch(fetchDeck(deckId)),
  fetchCards: deckId => dispatch(fetchCards(deckId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckEdit);
