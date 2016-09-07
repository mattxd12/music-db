
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('track').del(),
  
        // Inserts seed entries
        knex('track').insert({id: 1, name: 'Strawberry Fields'}),
        knex('track').insert({id: 2, name: 'Soft Bulletin'})
    );
};
