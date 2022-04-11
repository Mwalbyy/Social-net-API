const { connect, connection } = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

const url =
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetDB";

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
  });

connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
