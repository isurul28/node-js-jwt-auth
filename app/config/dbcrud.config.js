const dotenv = require("dotenv");
dotenv.config();


const mysql = require('mysql')
const cruddb = mysql.createConnection({
host: process.env.APP_SERVER,
port:process.env.APP_PORT,
user: process.env.APP_USERNAME,
password: process.env.APP_PASSWORD,
database:process.env.APP_DATABASE 
})

module.exports = cruddb;
