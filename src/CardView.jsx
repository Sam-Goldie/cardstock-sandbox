import React from 'react';
import Card from './Card.jsx';

const CardView = ({ cards }) => {
  console.log('what is cards: ' + JSON.stringify(cards));
  if (!cards) {
    return (
      <div>No cards found!</div>
    );
  }
  if (cards.length > 0) {
    let cardKey = 0;
    console.log(JSON.stringify(cards));

    return cards.map((card) => {
      cardKey++;
      return (
        <Card key={cardKey} card={card} />
      )
    })
  } else {
    return (
      <div>No cards found! :(</div>
    )
  }
};

export default CardView;