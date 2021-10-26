const {gql} = require('apollo-server-express');

const userTypeDefs = require('./user');
const taskTypeDefs = require('./task');
const geckoTypeDefs = require('./gecko');
const breedTypeDefs = require('./breed');

const typeDefs = gql`
    type Query {
        _: String
    }
    type Mutation {
        _: String
    }
`;

module.exports = [
    typeDefs,
    userTypeDefs,
    taskTypeDefs,
    geckoTypeDefs,
    breedTypeDefs
]

