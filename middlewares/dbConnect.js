
const { MongoClient } = require('mongodb');
const mongoDbConnectionString = 'mongodb://localhost:27017';
const DB_NAME = 'shopping';

const client = new MongoClient(mongoDbConnectionString);
  
  let db;
  
  async function connectDb() {
    try {
      await client.connect();
      db = client.db(DB_NAME);
      
      console.log("You successfully connected to MongoDB!");
      return db;
    } finally {
    }
  }
  connectDb();

  exports.connectDb = connectDb;