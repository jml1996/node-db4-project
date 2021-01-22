
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    { 
      // recipe_ingredient_id: 1, 
      quantity: 2, 
      step: 1, 
      instruction_text: "Toast 2 pieces of bread",
      // metric_id: 1
    },
    { 
      // recipe_ingredient_id: 2, 
      quantity: 1.5, 
      step: 2, 
      instruction_text: "Spread 1.5oz of jam on bread",
      // metric_id: 2
    },
    { 
      // recipe_ingredient_id: 3, 
      quantity: 1.5, 
      step: 3, 
      instruction_text: "Spread 1.5oz of peanut butter on bread",
      // metric_id: 2
    },
    { 
      // recipe_ingredient_id: 4, 
      quantity: 2, 
      step: 1, 
      instruction_text: "Toast 2 pieces of bread",
      // metric_id: 1
    },
    { 
      // recipe_ingredient_id: 5, 
      quantity: 1.8,
      step: 2, 
      instruction_text: "Place 1.8oz of cheese on bread",
      // metric_id: 2
    },
    { 
      // recipe_ingredient_id: 6, 
      quantity: 3, 
      step: 3, 
      instruction_text: "Place 3oz of ham on bread",
      // metric_id: 2
    },
    { 
      // recipe_ingredient_id: 7, 
      quantity: 1, 
      step: 1, 
      instruction_text: "Place 1 tea bag in cup",
      // metric_id: 6
    },
    { 
      // recipe_ingredient_id: 8, 
      quantity: 12, 
      step: 2, 
      instruction_text: "Pour 12oz water in cup",
      // metric_id: 2
    },
  ]);
};

// { recipe_id: 1, ingredient_id: 1 }, // bread
// { recipe_id: 1, ingredient_id: 3 }, // jam
// { recipe_id: 1, ingredient_id: 4 }, // pb

// { recipe_id: 2, ingredient_id: 1 }, // bread
// { recipe_id: 2, ingredient_id: 2 }, // cheese
// { recipe_id: 2, ingredient_id: 5 }, // ham

// { recipe_id: 3, ingredient_id: 6 }, // tea bag
// { recipe_id: 3, ingredient_id: 7 }, // hot water

//     { metric: 'pieces' },
//     { metric: 'oz' },
//     { metric: 'tablespoons' },
//     { metric: 'teaspoons' },
//     { metric: 'cups' },
//     { metric: 'bags' },