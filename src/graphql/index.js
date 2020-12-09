const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./schemas/user");
const resolver = require("./resolvers/user");

const schema = makeExecutableSchema({
  typeDefs,
  resolver,
});

module.exports = schema;
