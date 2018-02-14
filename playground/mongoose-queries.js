
const {ObjectID} = require('mongodb');

const {mongoose} = require("./../server/db/mongoose");
//const {Todo} = require("./../server/models/todo");
const {User} = require('./../server/models/user');
//var id = '5a847e9da9cfef2884c931a4';
// var id = '5a847e9da9cfef2884c931a4';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }
//
// Todo.find({
//    _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//    _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

var id = '5a665f16cff794ef249a5338';

  User.findById('5a665f16cff794ef249a5338').then((user) => {
       if (!user) {
         return console.log('Id not found');
       }
       console.log('User by ID', user);
   }, (e) => {
     console.log(e);
   });
