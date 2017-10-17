const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');
    db.close();
});