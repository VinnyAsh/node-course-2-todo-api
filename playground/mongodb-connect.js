// const MongoClient = require("mongodb").MongoClient;
// The code below is identical to the code above
const {MongoClient, ObjectID} = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);


//example of ECS 6 destructuring
// var user = {name: 'Vince', age: 61};
// var {name} = user;
// console.log(name);



// connect to the Mongo DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err)  {
      return  console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    db.collection('Todos').insertOne({
        text: "Something else to do",
        completed: false
    },  (err, result) => {
      if (err) {
        return  console.log('Unable to insert');
      }
      console.log(JSON.stringify(result.ops, undefined, 2));

    });
    //  db.close();

    db.collection('Users').insertOne({
        name: "Vince",
        age: 61,
        location: 'Goodlettsville'
    },  (err, result) => {
      if (err) {
        return  console.log('Unable to insert user');
      }
      console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

    });
     db.close();
});
