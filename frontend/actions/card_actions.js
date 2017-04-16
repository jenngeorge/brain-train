import * as APIUtil from '../util/card_api_util';
import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const REMOVE_CARD = "REMOVE_CARD";

export const createCard = card => dispatch => (
  APIUtil.createCard(card)
    .then(createdCard => dispatch(receiveCard(createdCard)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateCard = (card, id) => dispatch => (
  APIUtil.updateCard(card, id)
    .then(updatedCard => dispatch(receiveCard(updatedCard)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const fetchCard = cardId => dispatch => (
  APIUtil.fetchCard(cardId)
    .then(card => dispatch(receiveCard(card)),
      err => dispatch(receiveErrors(err.resposneJSON)))
);

export const fetchCards = deckId => dispatch => (
  APIUtil.fetchCards(deckId)
    .then(cards => dispatch(receiveCards(cards)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const removeCard = cardId => ({
  type: REMOVE_CARD,
  cardId
});

export const deleteCard = cardId => dispatch => (
  APIUtil.deleteCard(cardId)
    .then(() => dispatch(removeCard(cardId))),
      err => dispatch(receiveErrors(err.responseJSON))
);

// card score actions

export const createCardScore = cardScore => dispatch => (
  APIUtil.createCardScore(cardScore)
    .then(card => dispatch(receiveCard(card)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateCardScore = (cardScore, id) => dispatch => (
  APIUtil.updateCardScore(cardScore, id)
    .then(updatedCard => dispatch(receiveCard(updatedCard)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
