//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var user = {
//     name:'Fernando', 
//     age:28
// };

// var {name} = user;

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate(
        {
            _id: new ObjectID('59e7710d22efa10244f14af6')
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(result);
        });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('59e78176ec6ba7829f44cf0d')
        }, {
            $set: {
                name: 'Fernando Jose'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(result);
        });

    db.close();
});