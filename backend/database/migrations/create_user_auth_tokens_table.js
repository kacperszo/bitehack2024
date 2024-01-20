/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('userAuthTokens', table => {
        table.charset('utf8mb4');
        table.increments('id');
        table.integer('userId').unsigned().references('users.id').notNullable();
        table.text('accessToken').notNullable();
        table.text('refreshToken').notNullable();
        table.text('device').notNullable();
        table.text('ipAddress').notNullable();
        table.datetime('lastActive');
        table.datetime('createdAt');
        table.datetime('updatedAt');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('userAuthTokens');
};