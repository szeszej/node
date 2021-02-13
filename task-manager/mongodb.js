// const mongodb = require('mongodb')

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);
    // db.collection("users").findOne(
    //   { _id: new ObjectID("60283520f9b0e934143c6556") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );
    //   db.collection("users")
    //     .find({ age: 33 })
    //     .toArray((error, users) => {
    //       console.log(users);
    //     });
    //   db.collection("users")
    //     .find({ age: 33 })
    //     .count((error, count) => {
    //       console.log(count);
    //     });
    db.collection("tasks").findOne(
      { _id: new ObjectID("60283520f9b0e934143c655b") },
      (error, task) => {
        if (error) {
          return console.log("Unable to fetch!");
        }
        console.log(task);
      }
    );
    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
