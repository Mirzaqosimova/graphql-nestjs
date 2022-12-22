import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('price').notNullable();
        table.integer('amount').notNullable();
        table.enu('measurement_type', null, { useNative: true, existingType: true, enumName: 'measurement_type' })
        table.enu('status', null, { useNative: true, existingType: true, enumName: 'status' }).defaultTo('ACTIVE')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('products');
}

