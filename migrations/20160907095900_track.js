exports.up = function(knex, Promise) {
  return knex.schema.table("track", function (table) {
    table.integer("artist_id")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table("track", function (table) {
    table.dropColumn("artist_id")
})
}
