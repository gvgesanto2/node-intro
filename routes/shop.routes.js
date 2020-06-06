const path = require('path');

const express = require('express');

const shopCtrl = require('../controllers/shop.controller');

const router = express.Router();

router.get("/", shopCtrl.getIndex);

router.get("/products", shopCtrl.getProducts);

router.get("/products/:productId", shopCtrl.getProduct);

module.exports = router;