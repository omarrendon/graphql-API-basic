const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./schemas/user");
const resolver = require("./resolvers/user");

// console.log(typeDefs);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [resolver],
});

module.exports = schema;
