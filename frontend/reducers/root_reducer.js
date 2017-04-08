import {combineReducers} from 'redux';

import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import DeckReducer from './deck_reducer';
import CardReducer from './card_reducer';
import SubjectReducer from './subject_reducer';


const RootReducer = combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  cards: CardReducer,
  decks: DeckReducer,
  subjects: SubjectReducer
});

export default RootReducer;
