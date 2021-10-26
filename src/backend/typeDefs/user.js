const {gql} = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        user: User
    }

    extend type Mutation {
        signup(input: signupInput): User
        login(input: loginInput): Token
    }

    input loginInput {
        userName: String!
        password: String!
    }

    type Token {
        token: String!
    }

    input signupInput {
        firstName: String!
        lastName: String!
        userName: String!
        city: String!
        usState: String!
        zZip: String!
        email: String!
        password: String!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        userName: String!
        city: String!
        usState: String!
        zZip: Int!
        email: String!
        password: String!
        invalidCheck: String!
        tasks: [Task!]
        createdAt: String!
        updatedAt: String!
    }

    type Subscription {
        userCreated: User
    }

`;