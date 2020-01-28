
//dependanciees
const express = require('express');

//imports
const cardsRouter = require('./cards/cards _router');

const server = express();

server.use('/cards', cardsRouter);

//initial get
server.get('/', (req, res) => {
  res.json({ api: 'Im Alive!!'})
});

module.exports = server;