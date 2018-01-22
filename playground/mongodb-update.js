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

   db.collection('Users').findOneAndUpdate({
       _id:  new ObjectID('5a66317b605a5ee17028a7b1')

     }, {
        $set: { name: 'Leroy' },
        $inc: { age: +1}
     }, {
        returnOriginal: false
     }).then((result) => {
       console.log(result);
   });


     // db.close();
});
