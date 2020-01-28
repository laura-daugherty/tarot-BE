
// write routes using model


const router = require('express').Router();
const Cards = require('./cards_model')

router.get('/', (req, res) => {
  Cards.getAllCards()
    .catch(err => res.send(err)) 
    .then(cards => {
      res.status(200).json(cards)
    })
});

module.exports = router;