const db = require('../data/dbconfig');

module.exports = {
  getAllCards,
};

function getAllCards() {
  return db('cards')
}