var express = require("express");

var app = express();
var port = process.env.PORT || 3000;
var htmlController = require("./controllers/htmlController");
var apiController = require("./controllers/apiController");
// var mysql = require("mysql");
const mongoose = require('mongoose');
app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/public"));

app.use("/", function(req, res, next) {
  // console.log("rquest url :" + req.url);
//   var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "faten1234",
//     database: "laravel_db"
//   });
//   connection.query('SELECT * FROM cities',function (error, results, fields) {
//     if (error) throw error;
//     // connected!
//     console.log(results[0]);
//   });


mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const BlogPost = new Schema({
//   author: ObjectId,
  title: String,
  body: String,
  date: Date
});

var Post=mongoose.model('Post',BlogPost);
var post1=Post({
    title:'tttttt',
    body:'myBody test',
    date:'11-22-2010'
});

Post.create(post1, function(err, post){
    if (err) throw err;
    console.log(post)
})
// console.log(post1);
  next();
});


htmlController(app);
apiController(app);
app.listen(port);
