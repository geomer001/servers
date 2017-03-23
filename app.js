var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){

 response.writeHead(200, {'Content-Type': 'text/html'});
 var myReadStream = fs.createReadStream(__dirname + '/index1.html', 'utf8');
 myReadStream.pipe(response);
}).listen(8080,'127.0.0.1');

console.log('Server is running');
