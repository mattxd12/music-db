exports.up = function(knex, Promise) {
  return knex.schema.createTable("artist", function (table) {
    table.increments()
    table.text("name")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("artist")
}
