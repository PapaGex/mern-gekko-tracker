const { gql } = require('apollo-server-express');

module.exports = gql`
    extend type Query {
        breeds: [Breed!]
    }
    
    input createBreedInput {
        name: String!
        completed: Boolean!
    }
    
    extend type Mutation {
        createBreed(input: createBreedInput!): Breed
        updateBreed(id: ID!, input: updateBreedInput!): Breed
        deleteBreed(id: ID!): Breed
    }  
    
    input updateBreedInput {
        name: String
        completed: Boolean
    }
    
    type Breed {
        id: ID!
        latinName: String!
        commonName: String!
        naturalHabitat: String!
        tempHigh: Int!
        tempLow: Int!
        humidity: Int!
        specialReqs: String!
    }
    `;