const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('In middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>')
})

//router.post allows us to filter for incoming post requests at this path
router.post('/product', (req, res, next) => {
    //Conveinience function added by express
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;