let hotRod ={};

hotRod = {
	sound: 'vroom',
	soundOff: function() {
		console.log(this.sound);
	}
};

hotRod.soundOff();

let soundFunction = hotRod.soundOff; //this loses its context
soundFunction();

//we can 'bind' this to the object hotRod
//this will give soundFunction a 'this' context
let boundSoundFunction = soundFunction.bind(hotRod);
boundSoundFunction();
