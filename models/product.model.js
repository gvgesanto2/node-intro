const fs = require('fs');

const path = require('path');

const { rootDir } = require('../utils/path.utils');

const productDataPath = path.join(
  rootDir,
  "data",
  "products.json"
);

const getProductsFromFile = (filePath, cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

class Product {
  constructor(title) {
    this.title = title;
  }

  static fetchAll(cb) {
    getProductsFromFile(productDataPath, cb);
  }
}

module.exports = Product;