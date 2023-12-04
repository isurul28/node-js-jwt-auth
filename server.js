const cruddb = require('./app/config/dbcrud.config')
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://27c2cc09-670d-46c1-9ba3-8e2103e90bd0.e1-us-east-azure.choreoapps.dev:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.get("/person",(req,res) =>{
  const query = "SELECT * FROM Persons"
  cruddb.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.post("/addperson",(req,res) =>{
  const query = "INSERT INTO Persons (`PersonID`, `LastName`, `FirstName`, `Address`, `City`) VALUES (?)";
  const values =[
    req.body.PersonID,
    req.body.LastName,
    req.body.FirstName,
    req.body.Address,
    req.body.City

  ]
  cruddb.query(query,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("Person Information Added to database successfully!!")
  })
})