const fs= require('fs');

const http = require('http');

http.createServer(function (request, response) {
    console.log(request.method);
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.end('Hello World');
    if (request.url === '/'){
        fs.readFile('./global.html', 'UTF-8', (err, data)=>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        })
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('404 ERROR Could not find your data');
    }

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');