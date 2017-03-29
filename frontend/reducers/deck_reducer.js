import {RECEIVE_DECK,
        RECEIVE_DECKS,
        REMOVE_DECK} from '../actions/deck_actions';
import {RECEIVE_SUBJECTS,
        RECEIVE_SUBJECT} from '../actions/subject_actions';
import {merge, omit} from 'lodash';

const DeckReducer = (state = {byId: {}, allIds: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_DECK:
      newState.allIds.push(action.deck.id);
      newState.byId[action.deck.id] = action.deck;
      return newState;
    case RECEIVE_DECKS:
      let allIds = Object.keys(action.decks);
      let byId = action.decks;
      return {byId, allIds};
    case REMOVE_DECK:
      newState.byId = omit(newState.byId, action.deckId);
      let idx = newState.allIds.indexOf(action.deckId);
      newState.allIds.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};


export default DeckReducer;
