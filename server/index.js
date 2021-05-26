const express = require('express');
const path = require('path');
const query = require('../db/db.js');

const port = 3000;
const server = express();

server.use(express.static(path.join(__dirname, '../dist')));

server.get('/playingcards', async (req, res) => {
  console.log('looking at playing card deck!');
  const fiftyTwoDeck = await query();
  res.status(200).send(fiftyTwoDeck);
});

server.use('/', (req, res) => {
  res.status(200).send('goodbye, thou buffoon!');
  console.log('message sent');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});