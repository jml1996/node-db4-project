
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient: 'bread' },
    { ingredient: 'cheese' },
    { ingredient: 'jam' },
    { ingredient: 'peanut butter' },
    { ingredient: 'ham' },
    { ingredient: 'tea bag' },
    { ingredient: 'hot water' },
  ])
}
