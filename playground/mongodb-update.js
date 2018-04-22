//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if(error){
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5adc366cef09bd259c28fbcc')
        }, 
        {
            $set: {name: 'Paddu'},
            $inc: {age: 1}
        }, 
        {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });
    //client.close();
});

