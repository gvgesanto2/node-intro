const Product = require('../models/product.model');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body);
  product
    .save()
    .then(result => {
      console.log("postAdd - result: ", result);
      console.log("Created Product");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop', {
        products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
    })
    .catch(err => {
      console.log(err);
    });
};