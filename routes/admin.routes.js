const path = require('path');

const express = require('express');

const productCtrl = require('../controllers/product.controller');

const router = express.Router();

router.route('/add-product')
  .get(productCtrl.getAddProduct)
  .post(productCtrl.postAddProduct);

module.exports = router;
