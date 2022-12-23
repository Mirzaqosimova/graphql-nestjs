import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('orders', function (table) {
        table.increments('id').primary();
        table.integer('product_id').notNullable(); 
        table.integer('user_id').notNullable(); 
        table.integer('amount').notNullable();
        table.integer('price').notNullable();
        table.enu('status', null, { useNative: true, existingType: true, enumName: 'status' }).defaultTo('ACTIVE')
        table.timestamp('created_at').defaultTo(knex.fn.now());
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('orders');
}

