//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('ToDos').find({_id: new ObjectID('5adc271aeed2890d3c5b7d0d')}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, null, 4));
    // }, (error) => {
    //     console.log('Unable to fetch', error);
    // });

    db.collection('ToDos').find().count().then((count) => {
        console.log(`ToDos Count: ${count}`);
    }, (error) => {
        console.log('Unable to fetch', error);
    });

    //client.close();
});

