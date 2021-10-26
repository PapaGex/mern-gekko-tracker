const { combineResolvers } = require('graphql-resolvers');
const { breeds } = require('../index');
const User = require('../database/models/user');
const { isAuthenticated, isTaskOwner } = require('./middleware');
const { stringToBase64, base64ToString } = require('../helper');
const PubSub = require("../subscription");
const {userEvents} = require("../subscription/events");
const Task = require("../database/models/task");

module.exports = {
    Query: {
        breeds: () => { return breeds },
        breed: (_, { id }) => { return breeds.find(breed => breed.id === id)},
    },
    Subscription: {
        breedCreated: {
            subscribe: () => PubSub.asyncIterator(breedEvents.BREED_CREATED)
        }
    },
    Mutation: {
        createBreed: combineResolvers(isAuthenticated, async (_, { input }, { email }) => {
            try {
                const user = await User.findOne({ email });
                const breed = new Breed({ ...input, user: user.id });
                const result = await breed.save();
                user.tasks.push(result.id);
                await user.save();
                return result;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }),
        updateBreed: combineResolvers(isAuthenticated, isTaskOwner, async (_, { id, input }) => {
            try {
                const task = await Task.findByIdAndUpdate(id, { ...input }, { new: true });
                return task;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }),
    },
    Breed: {
        tasks: async ({id}) => {
            try {
                const tasks = await Task.find({breed: id});
                return tasks;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    }}
