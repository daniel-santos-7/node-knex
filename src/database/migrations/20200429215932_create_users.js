const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async function(knex) {
  
    return knex.schema.createTable('users', (table)=> {

        table.increments('id');
        table.text('username').unique().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    }).then(()=> knex.raw(onUpdateTrigger('users')));

};

exports.down = function(knex) {
    knex.schema.dropTable('users');
};
