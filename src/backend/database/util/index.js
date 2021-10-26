const mongoose = require('mongoose');
const cors = require('cors');

const MONGODB = process.env.MONGODB

module.exports.connection = async (uri, callback) => {
    try {
        mongoose.set('debug', true);
        await mongoose.connect(MONGODB, cors(),) || mongoose.connect("mongodb + srv://kawekaweau:!Brookesia7$@gekkonidae.lntxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Mongo Atlas has Connected Like Butter and a Hot Knife');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports.isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
}