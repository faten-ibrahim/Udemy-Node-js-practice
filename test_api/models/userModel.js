const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fname: { type: String, default: "Faten" },
  lname: { type: String, default: "Ibrahim" },
  age: Number,
  job: String,
  startDate: { type: Date, default: Date.now }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
