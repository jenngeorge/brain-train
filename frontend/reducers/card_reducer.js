import {RECEIVE_CARD,
        RECEIVE_CARDS,
        REMOVE_CARD} from '../actions/card_actions';
import {RECEIVE_SUBJECTS,
        RECEIVE_SUBJECT} from '../actions/subject_actions';
import {merge, omit} from 'lodash';

const CardReducer = (state = {byId: {}, allIds: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CARD:
      newState.allIds.push(action.card.id);
      newState.byId[action.card.id] = action.card;
      return newState;
    case RECEIVE_CARDS:
      let allIds = Object.keys(action.cards);
      let byId = action.cards;
      return {byId, allIds};
    case REMOVE_CARD:
      newState.byId = omit(newState.byId, action.cardId);
      let idx = newState.allIds.indexOf(action.cardId);
      newState.allIds.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};


export default CardReducer;
