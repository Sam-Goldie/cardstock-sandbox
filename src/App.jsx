import React, { useState } from 'react';
import SearchInput from './SearchInput.jsx';
import CardView from './CardView.jsx';

const App = () => {
  const [searchText, changeSearch] = useState('');
  const [cards, changeCards] = useState([{value: 4, suit: 'clubs'}]);

  const handleInput = (e) => {
    changeSearch(e.target.value);
  }

  return (
    <div>
      <SearchInput handleInput={handleInput} />
      <CardView cards={cards}/>
    </div>
    // <div>hewwo</div>
  )

}

export default App;