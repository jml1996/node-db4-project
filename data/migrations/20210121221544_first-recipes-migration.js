const { table } = require("../db-config")

exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe', 128).unique().notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient', 128).unique().notNullable();
    })
    .createTable('recipes_ingredients', tbl => {
        tbl.increments('recipe_ingredient_id');
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE');
    })
    .createTable('instructions', tbl => {
        tbl.increments('instructions_id');
        tbl.float('quantity').notNullable();
        tbl.integer('step').unsigned().notNullable();
        tbl.string('instruction_text');
        tbl.integer('recipe_ingredient_id')
            .unsigned()
            // .notNullable()
            .references('recipe_ingredient_id')
            .inTable('recipes_ingredients')
            .onDelete('CASCADE');
    })
}

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
}
