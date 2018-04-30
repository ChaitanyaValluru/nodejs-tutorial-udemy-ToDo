const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

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

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid Id');
    }
    Todo.findByIdAndRemove(id).then((doc) => {
        if(!doc){
            return res.status(404).send('No Id Found');
        }
        res.status(200).send(doc);
    }).catch((e) => {
        res.status(400).send('Error in ID');
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if(!ObjectID.isValid(id)){
        return res.status(404).send('Invalid Id');
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Data().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo){
            return res.status(404).send('No Id Found');
        }
        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send('Error in ID');
    });
});

// POST Users
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    console.log(body);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});


module.exports = {
    app
}
