import React from 'react';
import Card from './Card.jsx';

const CardView = ({ cards }) => {
  return cards.map((card) => {
    return (
      <Card card={card} />
    )
  })
};

export default CardView;