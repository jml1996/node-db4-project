
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { recipe: 'Peanut butter and jelly' },
    { recipe: 'Ham and cheese' },
    { recipe: 'Tea' },
  ])
}
