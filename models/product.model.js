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

const writeProductsInFile = (filePath, products, errorHandler) => {
  fs.writeFile(
    filePath,
    JSON.stringify(products),
    errorHandler || function (err) {
      console.log(err);
    }
  );
}

class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile(productDataPath, products => {
      products.push(this);
      writeProductsInFile(productDataPath, products);
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(productDataPath, cb);
  }
}

module.exports = Product;