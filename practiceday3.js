const http = require('http');

const hostname = '127.0.0.1';
const port = 9090;

//port - 3000 - pass - using
//port - 9090 - pass
//port - 21 - fails
//port - 443 - pass

const server = http.createServer((req,res) => {
   res.statusCode = 200;//server could process the request properly
   res.setHeader('Content-Type','text/plain');//text/plain::server is responding with text data
   res.end('Sum of two number is 3\n');//what is the response from the server
});

server.listen(port,hostname,() => {
   console.log(`Server running at http://${hostname}:${port}/`);
   console.log("Sum of two numbers");
   console.log("(a=1)(b=2)(c=a+b)");
});