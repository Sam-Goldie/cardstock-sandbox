import React from 'react';

const Card = ({ card }) => {
  return (
    <div>
      {card.value} of {card.suit}
    </div>
  )
};

export default Card;