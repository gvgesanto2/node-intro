const Product = require('../models/product.model');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};