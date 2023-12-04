const mysql = require('mysql')
const cruddb = mysql.createConnection({
host: "mysql-44a3265f-038c-4f64-b03f-a5487af6389e-mysqldb4054402929-ch.a.aivencloud.com",
port:"21955",
user: "avnadmin",
password: "AVNS_Lu_Hj2U3xD8b4ncEtbN",
database:"crudDB" 
})

module.exports = cruddb;