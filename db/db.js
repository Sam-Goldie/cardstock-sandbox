const pg = require('pg');

const pool = new pg.Pool({
  user: 'samgoldie',
  database: 'carddb',
  port: 5432
});

const valKey = {
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '1': '10',
  'J': 'Jack',
  'Q': 'Queen',
  'K': 'King',
  'A': 'Ace'
};

const suitKey = {
  'H': 'Hearts',
  'D': 'Diamonds',
  'S': 'Spades',
  'C': 'Clubs'
};

async function query() {
  console.log('query just fired!');
  await pool.connect();
  const dbResponse = await pool.query('SELECT * FROM cards');
  for (let row of dbResponse.rows) {
    row.val = valKey[row.val];
    row.suit = suitKey[row.suit];
  }
  return dbResponse;
}

module.exports = query;