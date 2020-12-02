const { Pool } = require("pg");

const pool = new Pool({
  user: PROCESS.ENV.user,
  host: ,
  database: ,
  password: ,
  port: ,
});

pool.connect();
