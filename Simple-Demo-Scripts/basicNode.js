let a = 2
let b = 3

function sum(num1, num2){
    return num1+num2
}

console.log(sum(a,b))

//Include file system functionalities in this file
const fs = require('fs')

fs.writeFileSync('hello.txt', 'hello from node.js')