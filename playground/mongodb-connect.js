//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('ToDos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert into ToDo', err);
        }
        console.log(JSON.stringify(result.ops, null, 4));
    })

    db.collection('Users').insertOne({
        name: 'ChAiTu',
        age: 28,
        location: 'Hyderabad'
    }, (err, result) => {
        if(err){
            return console.log('Failed inserting into users collection');
        }
        console.log(result.ops[0]._id.getTimestamp());
    })
    client.close();
});

