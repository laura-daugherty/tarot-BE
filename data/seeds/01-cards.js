
exports.seed = function(knex) {
  return knex('cards').insert([
    {id: 1, name: 'testvalue'},
    {id: 2, name: 'test'},
    {id: 3, name: 'tarot'}
  ]);
};
