const pg = require('pg');

const client = new pg.Client({
  user: 'samgoldie',
  database: 'carddb',
  port: 5432
});

async function query() {
  await client.connect();
  const query = await client.query('SELECT * FROM cards');
  console.log(query);
  client.end();
}

query();