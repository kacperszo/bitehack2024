/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('users', table => {
        table.charset('utf8mb4');
        table.increments('id');
        table.string('email').notNullable();
        table.string('displayName').notNullable();
        table.text('password').notNullable();
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