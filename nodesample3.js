http = require('http');
let fs = require('fs');

let handlerequest = (request, response) => {
    response.writeHead(200,{
        'Content-Type':'text/html' 
    });
    fs.readFile('./index.html',null,function(error,data){
        if (error){
            response.writeHead(404);
            response.write('file not found');
        }else{
            response.write(data);
        }
        response.end();
  });
};

http.createServer(handlerequest).listen(8000);
console.log("Hello from world");