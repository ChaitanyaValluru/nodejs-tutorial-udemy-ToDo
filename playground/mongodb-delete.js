//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('ToDos').deleteMany({text: 'Walk the Dog 1'}).then((result) => {
    //     console.log(result);
    // }, (error) => {
    //     console.log('Error in deleting: ', error);
    // });

    //delete
    // db.collection('ToDos').deleteOne({text: 'Something to do1'}).then((result) => {
    //     console.log(result);
    // }, (error) => {
    //     console.log('Error in deleting: ', error);
    // });

    //findOneAndDelete
    db.collection('ToDos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }, (error) => {
        console.log('Error in deleting: ', error);
    });

    //client.close();
});

