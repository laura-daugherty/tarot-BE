
exports.up = function(knex) {
  return knex.schema
  .createTable("cards", cards => {
    cards.increments();
    cards
      .text("name")
      .notNullable()
      .unique()
    cards
      .text("cardImage")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cards")
};
