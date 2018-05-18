//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
      console.log('Unable to connect to MongoDB server');
  }

//   db.collection('Todos').find({
//     _id:new ObjectID('5afd80f56ad6390614ae2177')
//   }).toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
//   },(err)=>{console.log('Unable to find documents');
// });
db.collection('User').find({name:'Jason'}).toArray().then((docs)=>{
   console.log(JSON.stringify(docs,undefined,2));
},(err)=>{console.log('Unable to find documents');
});

  //db.close();
});
