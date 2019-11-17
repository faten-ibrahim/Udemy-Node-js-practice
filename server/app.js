var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/file.htm','utf8');
    // res.end('hello world from node js server');
    var dynamicMessage="This Dynamic Content";
    html=html.replace('{Message}',dynamicMessage);
    res.end(html);
}).listen(3000, '127.0.0.1');