const https = require('https');
const http = require('http');

const url = 'https://jsonplaceholder.typicode.com/posts';

const fs = require('fs');

//add a comment
http.createServer(function (request, response) {

//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');

if (request.method === 'GET' && request.url === '/posts') {
    https.get(url,(httpsREs)=>{
        httpsREs.on('data',data=>{
            httpsREs.setEncoding('utf-8');
            console.log(data);

            response.write(data);
            
        });

    httpsREs.on('end',() => {
        response.end('You got the JSON');
        console.log('request end');
    });
    });

} else {
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.end('404 Error, url error');
}

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');