// Update with your config settings.
//this file contains the database accessing configurations to each of our app environments

module.exports = {

  development: { //our computer environment.
    client: 'sqlite3', //sqlite3 database only uses a file in our project to store the data.
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: { // simulates the production environment so that the developers can test the applicattion as if it was online.
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: { // clients environment, when people are accessing our applicattion.
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
