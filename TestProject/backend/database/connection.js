const mysql = require('mysql');
require('dotenv').config();
const HOST = process.env.DATABASE_HOST;
const USER = process.env.DATABASE_USER;
const PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE = process.env.DATABASE_NAME;

// Create a connection to the database
const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE
});

module.exports = connection;