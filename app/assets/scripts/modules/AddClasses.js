import $ from 'jquery';

class AddClasses {
 	constructor(els, classes) {
 		this.items = els;
 		this.classes = classes;
 		this.classAdd();

	}

	classAdd() {
		var that = this; 
		this.items.each(function() {
			var currentItem = this;
			$(currentItem).addClass(that.classes);

		});
	}
}
export default AddClasses;