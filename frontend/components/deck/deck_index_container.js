import { connect } from 'react-redux';
import DeckIndex from './deck_index';

const mapStateToProps = (state) => ({
  decks: state.decks.byId,
  currentUserId: state.session.currentUser.id
});


export default connect(
  mapStateToProps
)(DeckIndex);
