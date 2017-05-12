// console.log("This is a test");
// console.log("My name is John Doe and my favourite colour is blue");
// console.log("My name is Jane Doe and my favourite colour is red")

// function person(name, favColour) {
// 	console.log("My name is " + name + " and my favorite colour is " + favColour + ".");
// }

// function persons(name, favColour) {
// 	console.log("My name is " + name + " and my favorite colour is " + favColour + ".");
// }

// Create object for John
// var john = {
// 	name: "John Doe",
// 	favoriteColor: "blue",
// }

// Create object for Jane
// var jane = {
// 	name: "Jane Doe",
// 	favoriteColor: "red",
// }

// Create object for John and Jane
// var person = {
// 	johnName: "John Doe",
// 	johnFavColour: "grey",
// 	janeName: "Jane Doe",
// 	janeFavColour: "purple",
// }


// person("John Doe", "blue");
// person("Jane Doe", "red");

// person(john.name, john.favoriteColor);
// person(jane.name, jane.favoriteColor);

// persons(person.johnName, person.johnFavColour);
// persons(person.janeName, person.janeFavColour);

// Create more complex object for John
/** 
	Object Oriented Programming: cohesive, self-sufficient objects.
	Contains Data and Behaviour (or Nouns and Verbs).

	A Function inside an Object is called a Method.
**/
// Object 1: john
// var john = {
// 	// Data:
// 	name: "John Doe",
// 	favoriteColor: "blue",
// 	// Method (Function)
// 	greet: function() {
// 		console.log("Hello, my name is " + john.name + " and my favourite colour is " + john.favoriteColor + ".");
// 	}
// }

// john.greet();

// Constructor function - blueprint for multiple reusable object
/**
	blueprint name begins with capital letter: Person
**/
function Person(fullName, favColour) {
	// 'this' keyword refers to whichever object is currently being created:
	// john.greet and/or jane.greet

	this.name = fullName;
	this.favouriteColour = favColour;
	this.greet = function() {
		console.log("Hello - my name is " + this.name + " and my favourite colour is " + this.favouriteColour + ".");
	}
};

/**
	'new' keyword creates new instance of object type
**/
var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "red");
jane.greet();

