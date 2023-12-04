const mysql = require('mysql')
const cruddb = mysql.createConnection({
host: "xxxx",
port:"xxx",
user: "xxx",
password: "xxxxx",
database:"crudDB" 
})

module.exports = cruddb;
