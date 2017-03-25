import {RECEIVE_DECK,
        RECEIVE_DECKS,
        REMOVE_DECK} from '../actions/deck_actions';
import {merge, omit} from 'lodash';

const DeckReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_DECK:
      return merge({}, state, {[action.deck.id]: action.deck});
    case RECEIVE_DECKS:
      return action.decks;
    case REMOVE_DECK:
      return omit(state, action.deckId);
    default:
      return state;
  }
};


export default DeckReducer;
