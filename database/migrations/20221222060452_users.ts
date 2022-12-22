import { Knex } from "knex";



exports.up = function(knex: Knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.enu('gender', null, { useNative: true, existingType: true, enumName: 'gender' })
        table.datetime('date_of_birth').nullable();
        table.enu('status', null, { useNative: true, existingType: true, enumName: 'status' })
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex: Knex) {
    return knex.schema.dropTable('users');
};

