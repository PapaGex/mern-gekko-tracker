const { geckos, breeds } = require('../index');
const PubSub = require("../subscription");
const {userEvents} = require("../subscription/events");
const {combineResolvers} = require("graphql-resolvers");
const {isAuthenticated, isTaskOwner} = require("./middleware");
const User = require("../database/models/user");
const Task = require("../database/models/task");

module.exports = {
    Query: {
        geckos: () => geckos,
        gecko: (_, { id }) => geckos.find(gecko => gecko.id === id)
    },
    Subscription: {
        geckoCreated: {
            subscribe: () => PubSub.asyncIterator(geckoEvents.GECKO_CREATED)
        }
    },
    Mutation: {
        createGecko: combineResolvers(isAuthenticated, async (_, { input }, { email }) => {
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
        updateGecko: combineResolvers(isAuthenticated, isTaskOwner, async (_, { id, input }) => {
            try {
                const task = await Task.findByIdAndUpdate(id, { ...input }, { new: true });
                return task;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }),
    },
//    Gecko: {
 //       breeds: ({ id }) => breeds.filter(breed => breed.id === id)
//    }
}