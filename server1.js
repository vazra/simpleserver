// Load the http module to create an http server.
var http = require('http');
var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}



// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
    
  response.end("Hello World From Server 1\n IPs: "+addresses);
});



// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);



console.log("ADDRESSES: "+addresses);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


 
