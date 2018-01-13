// Javascript is dynamically typed. Type is inferred from value
// Preferred style is camel case. firstName

//ES6 has added two more keywords for declaring variables.
// variables- 'const' and 'let'
// let is very similar to var with the exception that the 
// variable cannot be redeclared after declaration
// var is scoped to the nearest 'function block' while
// let is scoped to the nearest 'enclosing block'- which
// can be a smaller scope that a function block.

//In general, good practice to use let instead of var
//unless you need to use var for a specific reason.


//Legal
var dogsName = "Harper"
var dogsName = "Drax"

//Not legal
// let catsName = "Pickles"
// let catsName = "Wiley"

//But the below is legal
let catsName = "Pickles"
catsName = "Wiley"


console.log("Hello world")
console.log(typeof 942)