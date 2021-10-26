const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8002;
const {graphqlHttp} = require('express-graphql');

const uri = process.env.MONGO;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const {DEBUG} = process.env;
require('dotenv').config({debug: DEBUG});
app.use(cors());

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const apollo = new ApolloServer({
    resolvers,
    typeDefs
});

app.use('graphql', graphqlHttp({
    schema: null,
    rootValue: {}
}))

apollo.applyMiddleware({app, path: '/graphql'});

app.use(express.json());
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database is most def kicking it!")
});

app.use("/", (req, res, next) => {
    res.send({message: 'Hey there people!'});
});

app.listen(PORT, (req, res) => {
    console.log(`St louis is listening on ${PORT}`);
});