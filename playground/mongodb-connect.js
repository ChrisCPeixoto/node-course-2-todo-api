//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
      console.log('Unable to connect to MongoDB server');
  }
  // console.log('Connected to MongoDB server');
  //
  // db.collection('Todos').insertOne({
  //   text: 'Something to Do',
  //   completed: false
  // },(err,result)=>{
  //   if(err){
  //       console.log('Unable to connect to insert',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  console.log('Connected to MongoDB server');

  db.collection('User').insertOne({
    _id:123,
    name: 'Christophe',
    age: 31,
    location: 'Budapest'
  },(err,result)=>{
    if(err){
        console.log('Unable to connect to insert',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.close();
});
