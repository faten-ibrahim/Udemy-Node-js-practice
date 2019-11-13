'use strict';
var EventEmitter = require('events');
var eventConfig = require('./config').events;
var util = require('util');

var myEmitter = new EventEmitter();
myEmitter.on(eventConfig.GREET, () => {
    console.log('an event called somewhere!');
});
myEmitter.on(eventConfig.GREET, function () {
    console.log('an event occurred!');
});
// myEmitter.on('event1', function(){
//   console.log('an event occurred!');
// });
console.log("hello");
myEmitter.emit(eventConfig.GREET);


// Objects create

var person = {
    firstName: '',
    lastName: '',
    greet: function (param) {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = Object.create(person);
john.firstName = "John";
john.lastName = "kkk";

console.log(john.greet());


var jemmy = Object.create(person);
jemmy.firstName = "jemmy";
jemmy.lastName = "bbbb";

console.log(jemmy.greet());
console.log(john.greet());

console.log(john.greet.call({ firstName: "sssss", lastName: "last" }));
console.log(person.greet.call({ firstName: "obj", lastName: "objlast" }));
console.log(person.greet.apply({ firstName: "obj", lastName: "objlast" }));


// ECS6
// 1- str
var name = "Ali";
var age = 20;

var str = `Hello ${name} you have ${age}`;

console.log(str);


function man() {
    this.firstName = 'faten';
    this.lastName = 'ibrahim';
}

man.prototype.greet = function () {
    console.log(`Hello again from here ${this.firstName}  ${this.lastName}`);
};

function postMan() {
    man.call(this);
    this.number = '1234';
}


util.inherits(postMan, man);

var officer = new postMan();
officer.greet();


// ECS6 classes

class Car {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }

    showDetails() {
        console.log(`${this.name} and its number is ${this.number}`);
    }
}

var myCar=new Car("Ferarri",'12233');
myCar.showDetails();
