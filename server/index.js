const express = require('express');
const path = require('path');

const port = 3000;
const server = express();

server.use(express.static(path.join(__dirname, '../dist')));

server.use('/', (req, res) => {
  res.send(200, 'goodbye, thou buffoon!');
  console.log('message sent');
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})