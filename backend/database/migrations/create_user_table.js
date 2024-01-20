/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('users', table => {
        table.charset('utf8mb4');
        table.increments('id');
        table.text('email').notNullable();
        table.text('displayName').notNullable();
        table.text('password').notNullable();
        table.text('type').notNullable();
        table.datetime('createdAt');
        table.datetime('updatedAt');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('users');
};