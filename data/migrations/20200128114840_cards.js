
exports.up = function(knex) {
  return knex.schema
  .createTable("cards", cards => {
    cards.increments();
    cards
      .text("name")
      .unique()
    cards
      .text("suit")
    cards
      .text("order")
    cards
      .text("description")
    cards
      .text("cardImage")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cards")
};
