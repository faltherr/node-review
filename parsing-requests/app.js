const express = require('express');
const bodyParser = require('body-parser')

// Import the admin routes that have the associated routes registered
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/', (req,res,next) => {
    console.log('This will always log');
    next();
});

app.use(adminRoutes);
app.use(shopRoutes);

// These were broken out into a new router file
// app.use('/add-product', (req, res, next) => {
//     console.log('In middleware');
//     res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>')
// })

// //app.post allows us to filter for incoming post requests at this path
// app.post('/product', (req, res, next) => {
//     //Conveinience function added by express
//     console.log(req.body)
//     res.redirect('/')
// })

// app.use('/', (req,res,next)=>{
//     console.log('In another middleware')
//     res.send('<h1>Hello from express</h1>')
// })

app.listen(3777)