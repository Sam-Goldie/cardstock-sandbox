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

const suitkey = {
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
    if (card.val === '1') {
      card.val = '10';
    }
    console.log(`${card.val} of ${suitkey[card.suit]}`);
  }
});