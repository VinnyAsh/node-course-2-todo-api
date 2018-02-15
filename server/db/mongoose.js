var mongoose = require('mongoose');

//setup mongoose to handle promises
mongoose.promise = global.Promise;
//connect to the mongodb database
MONGODB_URI='mongodb://gevja:#sandup1@ds235708.mlab.com:35708/mongoose-for-nodejs';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
