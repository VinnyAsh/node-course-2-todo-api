
// these are library imports
var express = require('express');
var bodyParser = require('body-parser');
// these are "local" import statements of mongoose
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

app = express();
app.use(bodyParser.json());
//CRUD
//create todos
app.post('/todos', (req, res) => {
   console.log(req.body);
   var todo = new Todo( {
       text: req.body.text
   });
   todo.save().then((doc) => {
      res.send(doc);
   }, (e) => {
      res.status(400).send(e);
   });
});
// Get todos
// app.get('/todos', (req, res) =>  {
//     Todo.find().then((todos) =>  {
//        res.send({todos});
//     }, (e) =>  {
//       res.status(400).send(e);
//     })
//  });

app.listen(3000, () => {
   console.log('Started on port 3000');
});

//module.export = {app};
