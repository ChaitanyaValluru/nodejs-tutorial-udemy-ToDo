var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        console.log('Error saving todo: ', error);
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (error) => {
        console.log(error);
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid ID');
    }
    Todo.findById(id).then((todoById) => {
        if(!todoById){
            return res.status(404).send('No Id Found');
        }
        res.send({
            todoById
        });
    }).catch((e) => {
        res.status(400).send('Error in ID');
    });
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});


module.exports = {
    app
}
