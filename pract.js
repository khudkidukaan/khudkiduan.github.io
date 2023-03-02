var http = require('http');

http.createServer(function (req, res){
    res.write("Hello World! 90900");
    res.end();
}).listen('8080');