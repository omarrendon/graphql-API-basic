require("dotenv").config();
const { Pool } = require("pg");

// PARA USAR VARIABLES DE ENTORNO CREAR UN ARCHIVO CONFIG.JS DONDE DEFINAMOS LAS VARIABLES DE ENTORNO

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: "graphql-user",
  password: "password",
  port: process.env.POSTGRES_PORT,
});

const getUsers = async () => {
  const users = await pool.query("select * from users");
  console.log(users.rows);
};

getUsers();

pool.on("error", (err, client) => {
  console.error("Error:", err);
});

module.exports = pool;
