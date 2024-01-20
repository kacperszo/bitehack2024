/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('journalEntries', table => {
        table.charset('utf8mb4');
        table.increments('id');
        table.text('userId').unsigned().references('users.id').notNullable();
        table.text('addiction').notNullable();
        table.text('quantity').notNullable();
        table.datetime('createdAt');
        table.datetime('updatedAt');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('journalEntries');
};