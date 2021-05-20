const express = require('express');
console.log('here i am!');

const port = 3000;
const server = express();

server.use('/', (req, res) => {
  res.send('hullo there!');
  console.log('message sent');
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})