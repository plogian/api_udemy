//Anything in javascript that isn't a primitive type is an object
//Functions in objects are methods
//Variables in objects are properties

//Object literal
var truck = {
	//properties
	make: 'Dodge',
	wheels: 4
};

//Can use bracket or dot notation to access properties
//bracket notation
console.log(`I have a ${truck['make']} that has ${truck['wheels']} wheels`);

//dot notation
console.log(`I have a ${truck.make} that has ${truck.wheels} wheels`);

//Object literal
var employee = {
	//properties
	firstName: 'Joe',
	lastName: 'Blow',
	//method
	fullName: function() {
		return `${this.firstName} ${this.lastName}`
	}
};

console.log(`Our IT Director is ${employee.firstName}`);
console.log(`His full name is ${employee.fullName()}`);

//Object constructor function
function Vehicle(make, model, year) {
	this.make= make;
	this.model= model;
	this.year;
	this.getFullDescription = function () {
		return `${this.year} ${this.make} ${this.model}`;
	};
}

//create new instances with the new keyword
let myTruck = new Vehicle('Dodge', 'Ram 1500', '2011');

console.log(myTruck.getFullDescription());

function createVehicle(make, model, year) {
	return {
		make: make,
		model: model,
		year: year,
		getFullDescription: function () {}
	}
}