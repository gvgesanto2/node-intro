const Product = require('../models/product.model');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render("shop/product-list", {
        pageTitle: "All Products",
        products,
        path: "/products",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
      });
    })
    .catch(err => console.log(err));
};

exports.getProduct = (req, res, next) => {
  const { productId } = req.params;
  Product.findById(productId)
    .then(product => {
      res.render("shop/product-detail", {
        pageTitle: product.title,
        product,
        path: "/products"
      });
    })
    .catch(err => console.log(err));
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render("shop/index", {
        pageTitle: "Shop",
        products,
        path: "/"
      });
    })
    .catch(err => console.log(err));
}