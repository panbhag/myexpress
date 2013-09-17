var http = require('http');

var server = http.createServer(function(req, res) {
  var message = "Hello HTTP";
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', message.length);
  res.writeHead(200);
  res.end(message);
});
server.listen(8080);