// switch statement
let color = 'red';

switch(color) {
	case 'yellow':
		console.log("Yellow");
		break;
	case 'green':
		console.log("Green");
		break;
	case 'red':
		console.log("Red")
		break;
	default :
		console.log("We couldn\'t determine the color!")
}


console.log("While Loop");
let counter= 5;
while(counter <=10) {
	//uses backticks to indicate template literals these were called
	//template strings 
	console.log(`The value is ${counter++}`)
}

console.log("Do while loop");
counter = 5;
do {
	console.log(`The value is ${counter}`)
	counter ++;
} while (counter <=10);		
//runs through loop without checking conditions

//for loop
console.log('For loops');
for(let x=5; x <= 10; x ++) {
	console.log(x);
}