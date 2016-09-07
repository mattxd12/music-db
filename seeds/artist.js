
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('artist').del(),

        // Inserts seed entries
        knex('artist').insert({id: 1, name: 'The Beatles'}),
        knex('artist').insert({id: 2, name: 'The Flaming Lips'})
    );
};
