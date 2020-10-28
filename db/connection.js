const util = require("util");
const mysql = require("mysql");

// make connection to database
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "kristin91",
    database: "employee_db",
  });

  connection.connect();

  connection.query = util.promisify(connection.query);

  module.exports = connection;