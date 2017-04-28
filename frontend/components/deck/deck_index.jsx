import React from 'react';
import { Link } from 'react-router-dom';
import DeckIndexItem from './deck_index_item';

const DeckIndex = (props) => {

  let deckLis;

  if (props.subject){
    deckLis = props.subject.deckIds.map(key => {
      if (props.decks[key]){
        return (
          <li key={key} className="deck-index-item">
            <DeckIndexItem
              deck={props.decks[key]}
              currentUserId={props.currentUserId} />
          </li>
        );
      }
    });
  }
  return(
    <ul className="deck-index">
      {deckLis}
    </ul>
  );
};

export default DeckIndex;
