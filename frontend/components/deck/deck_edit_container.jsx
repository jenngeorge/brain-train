import { connect } from 'react-redux';
import DeckEdit from './deck_edit';
import { fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, props) => ({
  deck: state.decks.byId[props.match.params.deckId],
  deckId: props.match.params.deckId
});

const mapDispatchToProps = dispatch => ({
  fetchDeck: deckId => dispatch(fetchDeck(deckId))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckEdit);
