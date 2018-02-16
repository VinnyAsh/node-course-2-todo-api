
// these are library importscons
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

// these are "local" import statements of mongoose
 var {mongoose} = require('./db/mongoose');
 var {Todo} = require('./models/todo');
 var {User} = require('./models/user');
//
const {ObjectID} = require('mongodb');

app = express();
const port = process.env.PORT || 3000;

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
//Get todos
app.get('/todos', (req, res) =>  {
    console.log('inside the app.Get');
    Todo.find().then((todos) =>  {
       res.send({todos});
    }, (e) =>  {
      res.status(400).send(e);
    })
 });

 app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
     if (!ObjectID.isValid(id)) {
        return res.status(404).send();
     }
     Todo.findById(id).then((todo) => {

        if (!todo) {
          return  res.status(404).send();
        }
        return res.send({todo});
     }).catch((e) => {
       return res.status(400).send(e);
     });
 });
//
app.post('/users', (req, res) => {
     // var email = req.body.email;
     // var password = req.body.password;
     var body = _.pick.body["email", "password"];
     var user = new User(body);

     user.save().then(() => {
        return user.generateAuthToken();
    }).then((token)  => {
       res.header('x-auth', token).send(user);
     }).catch((e) => {
       return res.status(400).send(e);
     });
});

app.delete('/todos/:id', (req, res) => {
   var id = req.params.id;
    if (!ObjectID.isValid(id)) {
       return res.status(404).send('Invalid ID');
    }
    Todo.findByIdAndRemove(id).then((todo) => {

       if (!todo) {
         return  res.status(404).send();
       }
       res.send({todo});
    }).catch((e) => {
      return res.status(400).send(e);
    });
});

app.patch('/todos/:id', (req, res) => {

  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
     return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
      body.completed = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((then) => {
      if (!todo) {
        return  res.status(404).send();
      }
       res.send({todo});
    }).catch((e) => {
      return res.status(400).send(e);
    })
});


app.listen(port, () => {
   console.log(`Started on port ${port}`);
});

module.export = {app};
