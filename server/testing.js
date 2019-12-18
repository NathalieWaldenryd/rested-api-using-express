const mysql = require('promise-mysql');
const config = require('./../config/test.json');

async function allCustomers() {
  const db = await mysql.createConnection(config);

  var rows = await db.query('SELECT * FROM `customer`;');

  db.end();
  return rows;
}

module.exports = {
  allCustomers
};