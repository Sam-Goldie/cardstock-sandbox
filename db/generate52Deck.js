const fs = require('fs');

const values = {2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10', 'J': 'Jack', 'Q': 'Queen', 'K': 'King', 'A': 'Ace'};
const suits = {'H': 'Hearts', 'D': 'Diamonds', 'S': 'Spades', 'C': 'Clubs'};

const generate52Deck = () => {
  let newDeck = '';
  for (let value in values) {
    for (let suit in suits) {
      newDeck += `${value}, ${suit}\n`;
    }
  }
  fs.writeFile('./52Deck.csv', newDeck, () => {
    console.log('data written!');
  });
}

generate52Deck();