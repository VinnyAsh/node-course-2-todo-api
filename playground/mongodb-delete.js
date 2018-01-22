// const MongoClient = require("mongodb").MongoClient;
// The code below is identical to the code above
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);


// connect to the Mongo DB
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=> {
    if (err)  {
      return  console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

  // deleteMany
      // db.collection('Users').deleteMany({name: 'Vince'}).then((result) => {
      //     console.log(result);
      // });
   //deleteOne
   // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
   //     console.log(result);
   // });

   //findOneAndDelete
   db.collection('Users').findOneAndDelete({
       _id:  new ObjectID('5a662f1fd2efda8c74760caf')

     }).then((result) => {
       console.log(result);
   });


     // db.close();
});
