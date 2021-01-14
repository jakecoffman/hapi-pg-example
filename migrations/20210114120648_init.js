
exports.up = function(knex) {
  return knex.schema.createTable('todo', table => {
    table.increments('id')
    table.string('entry')
    table.jsonb('metadata')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todo')
};
