const express = require('express')

const app = express()

//No path filter example

// app.use((req,res,next)=>{
//     console.log('First')
//     next()
// })
// app.use((req,res,next)=>{
//     console.log('Second')
//     res.send('<h1>This is the burgandy page</h1>')
// })

app.use('/users', (req,res,next)=>{
    console.log('Slash users')
    res.send('<h1>This is the slash users</h1>')
})

app.use('/', (req,res,next)=>{
    console.log('The slash middleware')
    res.send('<h1>Slash</h1>')
})

app.listen(1172)