var mongoose = require('mongoose');

//setup mongoose to handle promises
mongoose.promise = global.Promise;
//connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
