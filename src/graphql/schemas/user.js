const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    # Devuelve todos los usuarios
    getUsers: [User]
    # Devuleve un solo usuario dependendiendo de su ID
    getUser(id: ID!): User
  }

  type mutation {
    # Crea un nuevo usuario
    createUser(user: CreateUserInput): String!
    # Edita un usuaruio dependiendo de su ID
    editUser(id: ID!, user: EditUserInput): String!
  }

  enum Gender {
    HOMBRE
    MUJER
  }

  type User {
    id: ID!
    name: String
    lastName: String
    email: String
    gender: Gender
  }

  input CreateUserInput {
    # id: ID
    name: String!
    lastName: String!
    email: String!
    gender: Gender!
  }

  input EditUserInput {
    name: String
    lastName: String
    email: String
    gender: Gender
  }
`;

module.exports = typeDefs;
