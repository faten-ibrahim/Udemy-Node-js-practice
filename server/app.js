var http = require("http");
var fs = require("fs");

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     var html = fs.readFileSync(__dirname + '/file.htm', 'utf8');
//     var dynamicMessage = "This Dynamic Content";
//     html = html.replace('{Message}', dynamicMessage);
//     res.end(html);
// }).listen(3000, '127.0.0.1');

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     var html = fs.createReadStream(__dirname + '/file.htm').pipe(res);
//     res.end(html);
// }).listen(3000, '127.0.0.1');

http
  .createServer(function(req, res) {
    if (req.url === "/") {
      fs.createReadStream(__dirname + "/file.htm").pipe(res);
      //   console.log(html)
      //   res.end(html);
    } else if (req.url === "/api") {
      res.writeHead(200, { "content-type": "application/json" });
      var obj = {
        name: "faten",
        age: 24
      };
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }
  }).listen(3000, "127.0.0.1");
