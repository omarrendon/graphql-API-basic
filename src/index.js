require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./graphql/index");

const app = express();
app.use(express.json());

const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/graphql`);
});
