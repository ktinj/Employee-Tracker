const util = require("util");
const mysql = require("mysql");

// make connection to database
const connection = mysql.createConnection({
    host: "localhost",

    // Port
    port: 3306,

    // Username
    user: "root",

    // Password
    password: "kristin91",
    database: "employee_db",
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;