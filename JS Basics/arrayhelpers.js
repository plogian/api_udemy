let array = [1, 2, 3]
//For each
array.forEach(function(value){
	console.log(value);
});

//for each with fat arrow
array.forEach(value => console.log(value));

let grades = [98, 87, 82, 74, 89, 86];

let sum = 0;

grades.forEach(grade => sum += grade);

let average = sum / grades.length;
console.log(`Our average is ${average.toFixed(0)}`);

//Map Helper
// iterate through an array and perform some operation on each element
// One of the most commonly used helper methods

//with for loop
array = [1, 2, 3, 4, 5];
let addOne = [];

for(let x=0; x < array.length; x++) {
	addOne.push(array[x]+ 1);
}

console.log(addOne);

//with MAP Helpers
// let addOneMap = array.map(function(value){
// 	return value +1;
// })

//with fat arrow functions
let addOneMap = array.map(value => value + 1);

console.log(addOneMap);

//Filter
// Don't have vehicle object
// let filteredVehicles = vehicles.filter(vehicle => vehicle.make === 'Dodge');

//Find
//Find just gets the first element that matches criteria
// let vehicle = vehicles.find(function(vehicle){
// 	return vehicle.make === 'Dodge';
// });

//Every and some
// let areALL4wd = vehicle.every(function(vehicles) {
// 	return vehicle.is4wd === true;
// });

// console.log(areALL4wd);
//same idea with some



//REDUCE
for(let x=0; x < grades.length; x++) {
	sum += grades[x];
}

console.log(`sum = ${sum}`);

let total = grades.reduce(function(sum, grade) {
	return sum + grades;
}, 0); //0 is starting value of sum
