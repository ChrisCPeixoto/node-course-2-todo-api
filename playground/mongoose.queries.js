const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5b041124d20fab9c2a74cbe8';

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todo',todo);
});
