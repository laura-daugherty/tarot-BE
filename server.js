
//dependanciees
const express = require('express');

//imports
const cardsRouter = require('./cards/cards _router');

const server = express();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.use('/cards', cardsRouter);

//initial get
server.get('/', (req, res) => {
  res.json({ api: 'Im Alive!!'})
});

module.exports = server;