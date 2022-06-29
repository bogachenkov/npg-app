export const usersTypeDef = `
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    registeredAt: String!
  }

  type Query {
    info: String!
    users: [User]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): User!
  }
`