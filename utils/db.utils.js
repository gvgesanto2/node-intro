const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://gvgesanto2:PZ1fNewE8GrwyhM2@node-intro-e6zrq.gcp.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log("Connected!");
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;