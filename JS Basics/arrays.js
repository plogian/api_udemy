//Arrays are like a list. They are multiple values stored inside a single variable.
//Arrays are declared with square brackets.

let grades = [92, 98, 84, 87, 93];
console.log(`My first grade was ${grades[0]}`);

//Arrays all have certain properities
console.log(grades.length);

//POP
//And arrays have certain methods
//pop value removes last value from array
let poppedValue = grades.pop();

console.log(poppedValue);

//grades has one less item now
console.log(grades);

//PUSH
grades.push(poppedValue);
//we've pushed the popped value back
console.log(grades);

//SHIFT
let shiftedValue = grades.shift();
console.log(shiftedValue);
console.log(grades);

//UNSHIFT
grades.unshift(shiftedValue);
console.log(grades);

//CONCAT
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

let concatArray = array1.concat(array2)
console.log(concatArray)

//REVERSE
let reversedArray = concatArray.reverse();
console.log(reversedArray);

//SORT
let statesArray= ['Missouri', 'Arkansas', 'Arizona', 'Mississippi', 'Alabama'];
let sortedStatesArray = statesArray.sort();

//can pass in custom sort function too
let numericArray = [232, 34, 1, 2355];

let sortedNumericArray = numericArray.sort((a, b) => a-b);
console.log(sortedNumericArray);

//SLICE
let slicedStates = sortedStatesArray.slice(2,5);
console.log(slicedStates);

//If you leave the second arg, it takes it from 2 to the end
slicedStates = sortedStatesArray.slice(2);

