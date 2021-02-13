// const mongodb = require('mongodb')

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne(
    //   {
    //     name: 'Karolajna',
    //     age: 33,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    //   },
    // )
    // db.collection('users').insertMany(
    //   [
    //     { name: 'Olga', age: 33 },
    //     { name: 'Robert', age: 2 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert users!')
    //     }
    //     console.log(result.ops)
    //   },
    // )
    // db.collection('tasks').insertMany(
    //   [
    //     { description: 'Pranie', completed: false },
    //     { description: 'Zmywanie', completed: true },
    //     { description: 'Sprzątanie', completed: false },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    //   },
    // )
  },
)
