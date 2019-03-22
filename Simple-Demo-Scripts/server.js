const http = require('http');

// http.createServer(rqListener);

// function rqListener(req, res){

// }

const server = http.createServer(function(req,res){
    console.log(req.url, req.method, req.headers);
    // Process.exit is a basic hard exit of the evewnt loop
    // process.exit();
    // Node.js should send this response back to the client
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body><h1>Hello from my node.js server</h1></body>')
    res.write('</html>')
    res.end();
})

server.listen(9975)