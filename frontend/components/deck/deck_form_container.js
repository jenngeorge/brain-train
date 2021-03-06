import { connect } from 'react-redux';
import { clearErrors, receiveErrors } from '../../actions/session_actions';
import { createDeck, updateDeck } from '../../util/deck_api_util';
import { receiveDeck, deleteDeck } from '../../actions/deck_actions';
import { fetchSubject, fetchSubjects } from '../../actions/subject_actions';
import DeckForm from './deck_form';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id,
  subjects: state.subjects.byId,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  createDeck,
  updateDeck,
  fetchSubjects: () => dispatch(fetchSubjects()),
  fetchSubject: subjectId => dispatch(fetchSubject(subjectId)),
  receiveDeck: deck => dispatch(receiveDeck(deck)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: err => dispatch(receiveErrors(err)),
  deleteDeck: deckId => dispatch(deleteDeck(deckId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
