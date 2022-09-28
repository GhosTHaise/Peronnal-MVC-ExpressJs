let mysql = require("mysql");
const dotenv = require
const cnx = mysql.createConnection({
    host : "localhost",
    user : "GhosT",
    password : "sambatra"
})

module.exports = cnx;