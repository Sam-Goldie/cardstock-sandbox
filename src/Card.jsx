import React from 'react';

const Card = ({ card }) => {
  return (
    <div>
      {card.val} of {card.suit}
    </div>
  )
};

export default Card;