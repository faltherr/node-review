const path = require('path')
const express = require('express')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/users', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'users.html'))
})

app.listen(3789)