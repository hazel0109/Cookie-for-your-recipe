const MongoDb = require('mongodb');
const { config } = require('../config.js');

class Database {
  constructor() {
    this.db = null;
  }

  async initialize() {
    try {
      const result = await MongoDb.MongoClient.connect(config.db.host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      this.db = result.db('cookie');
    } catch (err) {
      console.log(err);
    }
  }
}
// let db;

// function connectDB() {
//   return MongoDb.MongoClient.connect(config.db.host, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then((client) => {
//     db = client.db;
//     console.log(db);
//   });
// }

// const connectDB = async () => {
//   const result = MongoDb.MongoClient.connect(config.db.host, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   return result.db;
// };

// function getRecipe() {
//   return db.collection('recipes');
// }

// function getTweets() {
//   return db.collection('tweets');
// }
const db = new Database();
module.exports = { db };
