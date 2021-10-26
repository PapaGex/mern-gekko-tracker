const mongoose = require('mongoose');
const cors = require('cors');
require = ('dotenv').config()

let MONGODB;


module.exports.connection = async () => {
    try {
        mongoose.set('debug', true);
        await mongoose.connect(process.env.MONGODB, cors(), {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Mongo Atlas has Connected Like Butter and a Hot Knife');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports.isValidObjectId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
}