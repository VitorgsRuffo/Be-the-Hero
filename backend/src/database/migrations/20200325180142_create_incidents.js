
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){

        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        //indica qual ong(row da tabela ongs), pelo seu id, criou tal incidente:
        table.string('ong_id').notNullable();

        //faz uma ligação com outra tabela. No caso permite que tenhamos uma coluna(ong_id) que faça referencia a outra tabela.
        table.foreign('ong_id').references('id').inTable('ongs');
        
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
