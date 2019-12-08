var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var config = require("./config/index");
var mongoose = require("mongoose");
var setupController=require('./controllers/setupController');
var apiController=require('./controllers/apiController');

console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true
},function(){
    console.log("coonected");
});
setupController(app);
apiController(app);
app.use(setupController);
app.use(apiController);

app.listen(port);
