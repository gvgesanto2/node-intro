const path = require('path');

const express = require('express');

const adminCtrl = require('../controllers/admin.controller');

const router = express.Router();

router.route('/add-product')
  .get(adminCtrl.getAddProduct)
  .post(adminCtrl.postAddProduct);

module.exports = router;
