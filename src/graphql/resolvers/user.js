const data = require("../../data/data.json");

const resolver = {
  Query: {
    getUsers: () => {
      return data.User;
    },
  },
};

module.exports = resolver;
