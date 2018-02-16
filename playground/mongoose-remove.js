
const {ObjectID} = require('mongodb');

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require('./../server/models/user');


// remove all
 // Todo.remove({}).then((result) => {
 //   console.log(result);
 // });

Todo.findByIdAndRemove('5a8710506a86be10a0dd11d2').then((todo)  => {
   console.log(todo);
});
