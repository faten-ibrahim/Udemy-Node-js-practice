var User = require("../models/userModel");
var bodyParser = require("body-parser");
module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get("/api/users", function(req, res) {
    User.find({}, function(err, users) {
      if (err) throw err;
      res.send(users);
    });
  });
  app.get("/api/users/:fname", function(req, res) {
    User.find({ fname: req.params.fname }, function(err, user) {
      if (err) throw err;
      res.send(user);
    });
  });

  app.get("/api/users/:id", function(req, res) {
      console.log("hi");
    User.findById({ _id: req.params.id }, function(err, user) {
      if (err) throw err;
      res.send(user);
    });
  });

  app.get("/api/users", function(req, res) {
    if (req.body.id) {
      User.findByIdAndUpdate(
        req.body.id,
        {
          fname: req.body.fname,
          lname: req.body.lname,
          age: req.body.age,
          job: req.body.job
        },
        function(err) {
          if (err) throw err;
          res.send("Updated Successfully");
        }
      );
    } else {
      var newUser = new User();
      newUser = {
        fname: "Hassan",
        lname: "Ali",
        age: 33,
        job: "tester"
      };
      newUser.save(function(err) {
        if (err) throw err;
        res.send("User Saved Successfully");
      });
    }
  });

  app.delete("/api/users", function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err) {
      if (err) throw err;
      res.send("User Deleted Successfully");
    });
  });
};
