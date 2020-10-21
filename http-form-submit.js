const http = require('http');

const fs = require('fs');

http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');

let body ='';
if (request.method==='GET') {
    console.log(request.method);
    console.log('working')
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./http-form.html','UTF-8',(err,data)=>{
        if(err) throw err;
        response.write(data);
        response.end();
    });
} else if(request.method==='POST') {
    request.on('data', (data)=>{
        body += data;
    });
    request.on('end', ()=>{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(body, ()=>{
            response.end();
        });
    });
} else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end('404 error could not find that page')
}

}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
