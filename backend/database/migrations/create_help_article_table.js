/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('helpArticles', table => {
        table.charset('utf8mb4');
        table.increments('id');
        table.text('title').notNullable();
        table.text('content').notNullable();
        table.text('author').notNullable();
        table.datetime('createdAt');
        table.datetime('updatedAt');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('helpArticles');
};