import * as APIUtil from '../util/deck_api_util';
import {receiveErrors, RECEIVE_ERRORS} from './session_actions';

export const RECEIVE_DECK = "RECEIVE_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const REMOVE_DECK = "REMOVE_DECK";

export const createDeck = deck => dispatch => (
  APIUtil.createDeck(deck)
    .then(createdDeck => dispatch(receiveDeck(createdDeck)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

export const fetchDeck = deckId => dispatch => (
  APIUtil.fetchDeck(deckId)
    .then(deck => dispatch(receiveDeck(deck)),
      err => dispatch(receiveErrors(err.resposneJSON)))
);

export const fetchDecks = () => dispatch => (
  APIUtil.fetchDecks()
    .then(decks => dispatch(receiveDecks(decks)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

export const removeDeck = deckId => ({
  type: REMOVE_DECK,
  deckId
});

export const deleteDeck = deckId => dispatch => (
  APIUtil.deleteDeck(deckId)
    .then(() => dispatch(removeDeck(deckId))),
      err => dispatch(receiveErrors(err.responseJSON))
);
