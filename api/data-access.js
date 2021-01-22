// user-model
const db = require("../../data/db-config.js");

module.exports = {
    getRecipes,
}

function getRecipes() {
    return db('recipes')
}

// SELECT
//     i.ingredient, ins.quantity
// FROM recipes_ingredients ri
// JOIN ingredients i
//     ON ri.ingredient_id = i.ingredient_id
// JOIN instructions ins
//     ON ri.recipe_ingredient_id = ins.instructions_id
// WHERE ri.recipe_id = 1;
function getShoppingList(recipe_id) {
    return db('recipes_ingredients as ri')
        .join('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
        .join('instructions as ins', 'ri.recipe_ingredient_id', 'ins.instructions_id')
        .select('i.ingredient', 'ins.quantity')
        .where('ri.recipe_id', recipe_id)
}

// SELECT
//     ins.instruction_text, ins.step
// FROM instructions ins
// JOIN recipes_ingredients ri
//     ON ri.recipe_ingredient_id = ins.instructions_id
// WHERE ri.recipe_id = 1
// ORDER BY ins.step;
function getInstructions(recipe_id) {
    return db('instructions as ins')
        .join('recipes_ingredients as ri', 'ri.recipe_ingredient_id', 'ins.instructions_id')
        .select('ins.instruction_text', 'ins.step')
        .where('ri.recipe_id', recipe_id)
        .orderBy('ins.step')
}