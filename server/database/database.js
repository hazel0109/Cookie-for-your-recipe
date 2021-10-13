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

const db = new Database();
module.exports = { db };
