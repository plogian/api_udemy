// Let you group a series of statements together to perform some task.
// Function in JS are first class objects. They can have properties
// and methods just like any other objects.


function sayHi() {
	console.log('Well, hello there');
}

sayHi();

//Function expressions - assign anonymous function to a variable

let sayGreeting = function () {
	return 'Well, Hello there';
}

console.log(sayGreeting());

//IIFE - Immediately Invoked Function Expression
let sayGreeting2 = (function() {
	return 'Hi, how are you?';
}());

//New with ES6 called 'Fat Arrow Functions'  Arrow functions do not bind 'this' =>
let speakNames = (firstName, secondName) => {
	return `The names are ${firstName} and ${secondName}`;
};

//If there is one return value, don't need a code block or even return keyword
let speakNames = (firstName, secondName) => 
	`The names are ${firstName} and ${secondName}`;

//can even remove parentheses if only one value to pass in
let speakNames = firstName => `The names is ${firstName}`;

console.log(speakNames('Jack', 'Jill'))
