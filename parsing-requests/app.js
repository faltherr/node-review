const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')

// Import the admin routes that have the associated routes registered
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

// Register a new middleware
app.use(bodyParser.urlencoded({extended:false}));
// Register a new middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req,res,next) => {
    console.log('This will always log');
    next();
});

// The leading '/admin' can be extracted from the path and added as a filter
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Catch all middleware
app.use((req,res,next) => {
    // res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

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