import { connect } from 'react-redux';
import { clearErrors, receiveErrors } from '../../actions/session_actions';
import { createCard, updateCard } from '../../util/card_api_util';
import { receiveCard, deleteCard } from '../../actions/card_actions';
import CardForm from './card_form';

const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id,
  cards: state.cards.byId,
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  createCard,
  updateCard,
  receiveCard: card => dispatch(receiveCard(card)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: err => dispatch(receiveErrors(err)),
  deleteCard: cardId => dispatch(deleteCard(cardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);
