let obj = {
	num: 2
};

let addToThis = function(a, b, c) {
	//'this' has no context here
	return this.num + a + b + c;
};

// call binds the function to the first object passed in
// parameters are passed in subsequent values
console.log(addToThis.call(obj, 1, 2, 3));