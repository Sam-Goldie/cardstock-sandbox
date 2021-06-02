import React, { useState } from 'react';
import SearchInput from './SearchInput.jsx';
import CardView from './CardView.jsx';
import axios from 'axios';
import 'regenerator-runtime/runtime';

const App = () => {
  const [searchText, changeSearch] = useState('');
  const [cards, changeCards] = useState([]);

  const handleInput = (e) => {
    changeSearch(e.target.value);
  }

  const getCards = async () => {
    const newCards = await axios.get('/playingcards');
    console.log('newCards type is: ' + typeof newCards);
    console.log('the response type is: ' + typeof newCards);
    console.log('stringified playing cards are: ' + JSON.stringify(newCards));
    console.log(JSON.stringify(newCards));
    await changeCards(newCards.data.rows);
    console.log('here are the cards stringified: ' + JSON.stringify(cards));
  };

  return (
    <div>
      <button onClick={getCards}>Get Cards</button>
      <SearchInput handleInput={handleInput} />
      <CardView cards={cards}/>
    </div>
    // <div>hewwo</div>
  )

}

export default App;