function greet() {
    var a = 1;
    var b = 3;
    var c = a + b;
    console.log(c);
}

function test(fn) {
    fn();
}

test(greet);

var logFun = function () {
    console.log("Hi, greeting you");
}

// logFun();

// test(logFun);

test(function () {
    console.log("Hiiiiiii,")
});

// modules
var clientGreet = require("./greetmodule");
clientGreet();


// objects in javascript

var student = {
    name: "ali",
    age: 20,
    greet: function () {
        console.log("Welcome, your name is " + this.name + " and your age is " + this.age + ",aren't you ?");
        console.log(this.address);
    },
    address: "alex"
}

student.greet();
console.log(student.name + " has " + student['age'] + "years old");


// prototype
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.movie = "Maleficent";
}

Person.prototype.personGreet = function () {
    console.log("hello, " + this.firstName + " " + this.lastName + " from prototype");
}

Person.prototype.personMovie = function () {
    console.log("your movie is " + this.movie);
}

var obj = new Person('faten', 'ibrahim');
obj.personGreet();
obj.personMovie();

console.log(obj.__proto__);
/** conclusion :
    -the prototype can access any attribute in his parent class(obj)
    -the class obj can access it's prototypes (functions) ====>  parentObj.prototypeFunc()
*/


// invoked function expression

var studentName = "Fatma";

(function (lastName) {
    var studentName = "Hoda";
    console.log(studentName);
    console.log(lastName);
}('Ali'));

console.log(studentName);



// More on require use greet folder

var greet2=require('./greet');
greet2.english();
greet2.spanish();


// Module with anonymous function 

var anonymousGreet=require('./moduleWithAnonymousFun');
anonymousGreet();
/***************************** */

// var TestGreet=require('./module2Anonymous');
// TestGreet.greet();

// or 
var TestGreet=require('./module2Anonymous').greet;
TestGreet();


// Require Class Instance

var greet3=require('./classModule');
greet3.greet();
greet3.greeting="change class greeting";
greet3.greet();

var greetTestChange=require('./classModule');
greetTestChange.greet();  // this effected by first instance change


// Make separate instances

var classWithSeparateInstanceAttr=require('./classWithSeparateInstanceAttr');
var greetInstance=new classWithSeparateInstanceAttr();
greetInstance.greet();

var classWithSeparateInstanceAttr2=require('./classWithSeparateInstanceAttr');
var greetInstance2=new classWithSeparateInstanceAttr2();
greetInstance2.greeting="tessssssssssssssssst separation greet";
greetInstance2.greet();

greetInstance.greet();


// Module pattren and to make some things in module protected
var modulePattern=require('./modulePattern').greet;
modulePattern();


//Exports vs Module Exports

var greett=require('./exportsVsModuleExports');
greett.greet();


// Require utility module
var util=require('util');
var name="soha"
var greeting2=util.format('hello, %s',name);
util.log(greeting2);


var arr=[];
arr.push(function(){
    console.log("first index in functions array")
});
arr.push(function(){
    console.log("first second in functions array")
});
arr.push(function(){
    console.log("first third in functions array")
});
// call using lamda
// arr.forEach(element => {
//     element();
// });

arr.forEach(function(element){
    element();
});







