const knex = require('knex');

//importing the database configurations: the objects that are defined inside knexfile.js
const configuration = require('../../knexfile.js');

//Getting the development connection (development object that is defined inside the knexfile.js, that was exported from it to the configuration variable )
const connection = knex(configuration.development);


//exporting the connection to the database. (so that it can be imported by other files when needed)
module.exports = connection;