let mysql = require("mysql")
require("dotenv").config()
const cnx = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER_DB,
    password : process.env.PASSWORD,
    database : process.env.DBNAME
})

module.exports = cnx;

