module.exports = {
  HOST: "xxxx",
  USER: "xxx",
  PORT: "xxxx",
  PASSWORD: "xxxx",
  DB: "authdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
