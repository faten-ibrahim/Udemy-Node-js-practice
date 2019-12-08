var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send("<html><head></head><body><h1>Hello from get</h1></body></html>");
  });

 

  app.get("/persons/:id", function(req, res) {
    res.send(
      "<html> <head><link href=/assets/style.css type=text/css rel=stylesheet /> </head><body><h1>Person :" +
        req.params.id +
        "</h1></body></html>"
    );
  });

  app.get("/pages/:id", function(req, res) {
    res.render("index", { ID: req.params.id, Qstr: req.query.qstr });
  });

  app.get("/student", function(req, res) {
    res.render("form");
  });

  app.post("/home", urlencodedParser, function(req, res) {
    res.render("home", { name: req.body.name });
  });
};
