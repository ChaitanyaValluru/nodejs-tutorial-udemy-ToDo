const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({_id: '5adeab37d7b03a38e809e3b5'}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5adeab37d7b03a38e809e3b5').then((todo) => {
    console.log(todo);
});


