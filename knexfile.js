// Update with your config settings.
require('dotenv').config();
const localPg = {
  host: 'localhost',
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}

const dbConnection = process.env.DATABASE_URL || localPg

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },


  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/data/migrations',
    },
    seeds: {
      directory: __dirname + '/data/seeds',
    }
  }

};
