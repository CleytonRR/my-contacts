require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'mycontacts',
});

client.connect();

// exports.query = async (query) => {
//   const { rows } = await client.query(query);

//   return rows;
// };
