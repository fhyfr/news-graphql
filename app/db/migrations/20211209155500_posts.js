exports.up = (knex) => {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id");
    table.string("title", 255);
    table.text("body", 255);
    table.string("slug", 255);
    table.timestamp("date", { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("posts");
};
