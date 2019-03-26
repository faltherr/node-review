const path = require('path')
const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

// In the app.js file we prepend the /admin to the path
// The full path accepts GET requests at /admin/add-product
router.get('/add-product', (req, res, next) => {
    console.log('In middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>')
})

//router.post allows us to filter for incoming post requests at this path
router.post('/add-product', (req, res, next) => {
    //Conveinience function added by express
    console.log(req.body);
    //res.redirect sends you to a new path
    res.redirect('/');
});

module.exports = router;