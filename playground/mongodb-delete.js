const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
      console.log('Unable to connect to MongoDB server');
  }

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  //findOneAndDelte
  db.collection('User').findOneAndDelete({_id: 123}).then((result)=>{
    console.log(result);
  });


  //db.close();
});
