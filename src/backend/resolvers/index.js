const userResolver = require('./user');
const taskResolver = require('./task');
const geckoResolver = require('./gecko');
const breedResolver = require('./breed');

module.exports = [
    userResolver,
    taskResolver,
    geckoResolver,
    breedResolver,
];