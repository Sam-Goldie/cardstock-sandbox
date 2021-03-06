const pg = require('pg');

const client = new pg.Client({
  user: 'samgoldie',
  database: 'carddb',
  port: 5432
});

async function query() {
  await client.connect();
  const query = await client.query('SELECT * FROM cards');
  client.end();
  return query;
}

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

query().then((result) => {
  // console.log('hello');
  // console.log(typeof result);
  // console.log(JSON.stringify(result));
  for (let card of result.rows) {
    console.log(`${valKey[card.val]} of ${suitKey[card.suit]}`);
  }
});