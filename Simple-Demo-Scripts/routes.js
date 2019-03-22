const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    // req.on is an asynchronous function
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      // create a new buffer and all the chunks from the body to it
      // On this buffer we can call a toSting() method
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message, err => {
        // Only send the response if you are done working with the data
        // res.writeHead(302);
        // 302 is redirect code
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
};

//This is a global variable storeds by Node so we can now import
// We basically register request handler in module exports
// module.exports = requestHandler;

// You can also export an object to export multiple things
module.exports ={
  handler: requestHandler,
  someText: 'some hard coded text'
}