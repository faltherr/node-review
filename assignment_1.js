const http = require('http') 

const server = http.createServer((req,res)=>{
    let url = req.url
    let method = req.method
    if(url==='/'){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Welcome</title><head>");
        res.write(
        '<body><h1>Welcome to the Server :)</h1> <form action="/create-user" method="POST"><input name="new-user"/><button type="submit">Send</button></form> </body>'
        );
        res.write("</html>");
        return res.end();
    } 
    if (url === "/create-user" && method === 'POST'){
        const body = [];
        // Look into chunks and buffers more
        req.on("data", chunk => {
            body.push(chunk);
        });
        req.on("end", ()=> {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split("=")[1];
            console.log(user);
        })
        res.statusCode = 302;
        //Here we handle the redirect
        res.setHeader('Location', '/users');
        return res.end();
    }
    if(url === '/users'){
        res.setHeader("Content-Type", "text/html");
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write(
            '<body><ul><li>Bob</li><li>Mary</li><li>Sally</li></ul></body>'
            );
        res.write('</html>');
        return res.end();
    }
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>404</title><head>");
        res.write(
        '<body><h1>Page not found</h1> </body>'
        );
        res.write("</html>");
});

server.listen(3008)
