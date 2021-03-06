const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // render allows us to pass in data to our views
  res.render('shop', {prods: products, pageTitle: 'Shop', path:'/'});
});

module.exports = router;
