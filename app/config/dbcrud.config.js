const mysql = require('mysql')
const cruddb = mysql.createConnection({
host: "localhost",
user: "root",
password: "lol199728",
database:"crudDB" 
})

module.exports = cruddb;