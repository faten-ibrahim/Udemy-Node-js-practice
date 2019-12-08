var User = require("../models/userModel");
module.exports = function(app) {
  app.get("/api/setupUser", function(req, res) {
    var firstUsers = [
      {
        fname: "ali",
        lname: "Helmy",
        age: 28,
        job: "tester"
      },
      {
        fname: "soha",
        lname: "Helmy",
        age: 27,
        job: "po"
      },
      {
        age: 24,
        job: "developer"
      }
    ];

    User.create(firstUsers,function(err,users){
        if(err) throw err;
        res.send(users);
    });
  });
};
