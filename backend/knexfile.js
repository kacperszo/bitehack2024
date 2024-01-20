/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: 'mysql2',
    connection: {
      host: '46.41.137.139',
      port: '3306',
      database: 'bitehack2024',
      user: 'bitehack2024',
      password: '8h70jG6^b'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations',
      directory: 'database/migrations'
    },
    seeds: {
      tableName: 'seeds',
      directory: 'database/seeds'
    }
  },
  development: {
    client: 'mysql2',
    connection: {
      host: '46.41.137.139',
      port: '3306',
      database: 'bitehack2024',
      user: 'bitehack2024',
      password: '8h70jG6^b'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations',
      directory: 'database/migrations'
    },
    seeds: {
      tableName: 'seeds',
      directory: 'database/seeds'
    }
  }
};