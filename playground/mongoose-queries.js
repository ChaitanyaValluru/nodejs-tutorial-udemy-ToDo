const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ade017f8774c81ea8d7ee52z';

if(!ObjectID.isValid(id)){
    return console.log('Invalid ID');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

Todo.findById(id).then((todoById) => {
    if(!todoById){
        return console.log('Id not found');
    }
    console.log('Todo id', todoById);
}).catch((e) => {
    console.log(e);
});


