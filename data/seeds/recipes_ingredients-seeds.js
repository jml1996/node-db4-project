
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1 }, // bread
    { recipe_id: 1, ingredient_id: 3 }, // jam
    { recipe_id: 1, ingredient_id: 4 }, // pb
    { recipe_id: 2, ingredient_id: 1 }, // bread
    { recipe_id: 2, ingredient_id: 2 }, // cheese
    { recipe_id: 2, ingredient_id: 5 }, // ham
    { recipe_id: 3, ingredient_id: 6 }, // tea bag
    { recipe_id: 3, ingredient_id: 7 }, // hot water
  ]);
};
