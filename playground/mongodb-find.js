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

// _id is an object and must be converted to one in order find a record by it
    // db.collection('Todos').find({
    //     _id: new ObjectID('5a662d4f802e85df28b4aa4f')
    //
    //   }).toArray().then((docs)  =>  {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)  =>  {
    //    console.log('Unable to fetch todos');
    // });

    db.collection('Users').find({name: 'Vince'}).toArray().then((docs)  =>  {
        //console.log(`Todos count:' ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)  =>  {
       console.log('Unable to fetch todos');
    });

    db.collection('Users').find({name: 'Vince'}).count().then((count)  =>  {
        console.log(`Users count:' ${count}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err)  =>  {
       console.log('Unable to fetch todos');
    });


     // db.close();
});
