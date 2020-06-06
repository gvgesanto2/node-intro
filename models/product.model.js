const mongodb = require('mongodb');

const { getDb, convertToMongoId } = require("../utils/db.utils");

class Product {
  constructor({ title, imageUrl, price, description }) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const db = getDb();
    return db ?
      db
        .collection("products")
        .insertOne(this)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        }) :
      null;
  }

  static fetchAll() {
    const db = getDb();
    return db ?
      db
        .collection("products")
        .find()
        .toArray()
        .then(products => {
          console.log(products);
          return products;
        })
        .catch(err => {
          console.log(err);
        }) :
      null;
  }

  static findById(productId) {
    const db = getDb();
    return db
      ? db
          .collection("products")
          .find({ _id: convertToMongoId(productId) })
          .next()
          .then((product) => {
            return product;
          })
          .catch((err) => {
            console.log(err);
          })
      : null;
  }
}

module.exports = Product;