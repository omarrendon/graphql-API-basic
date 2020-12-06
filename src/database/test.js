const pool = require("./db");

const query = `
SELECT *
FROM users
`;

pool.connect((err, client, done) => {
  if (err) throw err;
  client.query(query, (err, res) => {
    done();
    if (err) {
      console.log(err.stack);
    } else {
      for (let row of res.rows) {
        console.log(row);
      }
    }
  });
});
