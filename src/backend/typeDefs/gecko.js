const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
    geckos: Gecko!
}

input createGeckoInput {
    name: String!
    completed: Boolean!
}

extend type Mutation {
    createGecko(input: createGeckoInput!): Gecko
    updateGecko(id: ID!, input: updateGeckoInput!): Gecko
    deleteGecko(id: ID!): Gecko
}

input updateGeckoInput {
    name: String
    completed: Boolean
}

type Gecko {
    id: ID!
    name: String!
    latinName: String!
    origin: String!
    hatchDate: String!
    gender: String!
    description: String!
    }
`;