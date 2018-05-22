const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
      console.log('Unable to connect to MongoDB server');
  }

  db.collection('User').findOneAndUpdate({name: 'Jason'
    },{
    $set:{
         name:'Christophe'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });


  //db.close();
});
