const express = require('express')

const app = express()

app.use((req,res, next) => {
    console.log('In the middleware')
    //We have to call next to allow the request to travel on to the next middleware line
    next()
})

app.use('/',(req,res, next) => {
    console.log('This will always be called')
})

app.use('/add-product',(req,res, next) => {
    console.log('In another middleware')
    res.send('<h1>The add product</h1>')
})

app.use('/',(req,res, next) => {
    console.log('In another middleware')
    res.send('<h1>Hello from express</h1>')
})

app.listen(3079);
