const db = require('../data/dbConfig');

module.exports = {
  getAllCards,
};

function getAllCards() {
  return db('cards')
}