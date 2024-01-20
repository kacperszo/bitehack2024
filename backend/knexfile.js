/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  production: {
    client: 'mysql2',
    connection: {
      host: '',
      port: '',
      database: '',
      user: '',
      password: ''
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
      host: '',
      port: '',
      database: '',
      user: '',
      password: ''
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