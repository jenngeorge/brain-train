import React from 'react';
import { Link } from 'react-router-dom';
import CardIndexItem from './card_index_item';

const CardIndex = (props) => {

  let cardLis;

  if (props.cards){
    cardLis = props.cardIds.map(key => (
      <li key={key}>
        <CardIndexItem card={props.cards[key]}/>
      </li>
    ));
  }

  return(
    <ul className="card-index">
      {cardLis}
    </ul>
  );
};

export default CardIndex;
