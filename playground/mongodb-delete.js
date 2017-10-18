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

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)

    // db.collection('Users').insertOne({
    //     name: 'Fernando',
    //     age: 28,
    //     location: 'Barranquilla, Atlantico, Colombia'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    // DeleteMany
    // db.collection('Todos').deleteMany({ text: 'Example' }).then((result)=>{
    //     console.log(result);
    // });

    // DeleteOne
    // db.collection('Todos').deleteOne({ _id: new ObjectID('59e6656022efa10244f141b1') }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ text: 'Example' }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({ name: 'Fernando' });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('59e7771b22efa10244f14bfe') }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    db.close();
});