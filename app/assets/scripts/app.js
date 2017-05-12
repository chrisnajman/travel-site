var $ = require('jquery');

// var Person = require('./modules/Person');
import Person from "./modules/Person";

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " now owes £100,000 in taxes.");
	}
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "Orange");
jane.greet();
jane.payTaxes();

// test jquery installed
// $("h2").remove();
//

