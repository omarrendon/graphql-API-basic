const User = require("../../data/data");

const resolver = {
  Query: {
    getUsers() {
      return User;
    },
  },
};

module.exports = resolver;
