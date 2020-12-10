const User = require("../../data/data");

const resolver = {
  Query: {
    getUsers: () => {
      return User;
    },
    getUser: (root, args) => {
      console.log(args.id);
      const usuario = User.filter((user) => user.id == args.id);
      return usuario.pop();
    },
  },
};

module.exports = resolver;
