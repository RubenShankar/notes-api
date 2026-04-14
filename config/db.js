
console.log("THIS IS DB.JS DATABASE ");

const { Pool } = require("pg");

require ("dotenv").config();

const pool = new Pool
  ({
     user     : process.env.DB_USER,
     password : process.env.DB_PASSWORD,
     host     : process.env.DB_HOST,
     port     : process.env.DB_PORT,
     database : process.env.DB_NAME,
  });

pool.connect()
       .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
       .catch(err => console.log("FAILED TO CONNECT DATABASE", err.message));

module.exports = pool;
