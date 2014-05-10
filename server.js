// var express = require('express');

// var app = express();

// app.configure(function () {
//     app.use(express.methodOverride());
//     app.use(express.bodyParser());
//     app.use(express.static(__dirname));
//     app.use(express.errorHandler({
//         dumpExceptions: true,
//         showStack: true
//     }));
//     app.use(app.router);
// });

// app.get('/', function (req, res) {
//     res.redirect('/src/index.html');
// });

// app.listen(3000); //, '192.168.0.187'


//====================================

// var express = require('express'),
//     http = require('http'),
//     app = express(),
//     httpServer = http.createServer(app);
 
// app.configure(function () {
//     app.set('port', 3000);
//     app.use(express.static(__dirname + '/public'));
// });
 
// httpServer.listen(app.get('port'), function () {
//     console.log("Express server listening on port %s.", httpServer.address().port);
// });

//======================================

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 8888;
 
http.createServer(function(request, response) {
 
  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);
  
  path.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }
 
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';
 
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
 
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));
 
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");