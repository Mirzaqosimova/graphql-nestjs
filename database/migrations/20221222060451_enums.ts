import { Knex } from 'knex';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex: Knex) {
    return knex.raw(`CREATE TYPE "gender" AS ENUM ('FEMALE', 'MALE','UNKNOWN');
    CREATE TYPE "measurement_type" AS ENUM ('KG', 'L','M','GR','T','KM');
    CREATE TYPE "status" AS ENUM ('ACTIVE', 'DELETE','BLOCK');`)
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex: Knex) {
      return knex.raw(`DROP TYPE gender;
      DROP TYPE status;
      DROP TYPE measurement_type;`)
    };
  