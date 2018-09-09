const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove().then((result) => {

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5b9471604aeb641c1cb9dd78').then((todo) => {
  console.log(todo);
});
