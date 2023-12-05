const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  HOST: process.env.APP_SERVER,
  USER: process.env.APP_USERNAME,
  PORT: process.env.APP_PORT,
  PASSWORD: process.env.APP_PASSWORD,
  DB: process.env.APP_DB,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 30000,
  },
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 90000
  }
};
