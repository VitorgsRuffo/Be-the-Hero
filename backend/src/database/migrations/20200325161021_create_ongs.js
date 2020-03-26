
//up: vai conter oq eu quero que seja feito.
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

//down: vai ter a opçao de deletar oq eu fiz no up.
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
