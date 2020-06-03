const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

exports.mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://gvgesanto2:PZ1fNewE8GrwyhM2@node-intro-e6zrq.gcp.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected to the MongoDB database!");
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

exports.getDb = () => {
  return _db;
}

