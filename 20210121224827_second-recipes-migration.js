
// exports.up = function(knex) {
//   return knex.schema
//     .createTable('metrics', tbl => {
//         tbl.increments('metric_id')
//         tbl.string('metric', 128).unique().notNullable()
//     })
// };

// exports.down = function(knex) {
//     return knex.schema
//         .table('instructions', tbl => {
//             tbl.dropColumn('metric_id')
//         })
//         .dropTableIfExists('metrics')
// };
