// ES6 style
class Person {

	constructor(fullName, favColour) {
		this.name = fullName;
		this.favouriteColour = favColour;		
	}

	greet() {
		console.log("Alloha - my name is " + this.name + " and my favourite colour is " + this.favouriteColour + ".");
	}
};

// module.exports = Person;
export default Person;

// function Person(fullName, favColour) {
// 	// 'this' keyword refers to whichever object is currently being created:
// 	// john.greet and/or jane.greet

// 	this.name = fullName;
// 	this.favouriteColour = favColour;
// 	this.greet = function() {
// 		console.log("Hello - my name is " + this.name + " and my favourite colour is " + this.favouriteColour + ".");
// 	}
// };


