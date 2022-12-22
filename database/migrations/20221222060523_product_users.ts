import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user_products', function (table) {
        table.integer('user_id').notNullable();
        table.integer('product_id').notNullable(); 
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user_products');
}

