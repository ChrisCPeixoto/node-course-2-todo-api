const {ObjectID} = require('mongodb');

const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =  require('./../server/models/user');

//Todo.remove({})

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove({})


Todo.findByIdAndRemove('5b041124d20fab9c2a74cbe8').then((todo)=>{
  console.log(todo);
});
