var http = require('http');
var dt = require('./somar');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("a data e o horario é: " + dt.somar());
  res.end();
}).listen(8080);