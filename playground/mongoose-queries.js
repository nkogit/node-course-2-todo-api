const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b942c08a9b8b08130eff13d';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
}).catch((e) => console.log(e));

// user not found
// user found -> print
// print error to screen
// findById



// var id = '5b9449cc23f5278581d715433';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));
