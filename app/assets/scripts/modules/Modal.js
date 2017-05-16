import $ from "jquery";

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}
	
	events() {
		// clicking open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// click the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// if push any key down
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	// 27 == Escape key
	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}
	
	openModal() {
	 this.modal.addClass("modal--is-visible");
	 return false;
	}

	closeModal() {
	 this.modal.removeClass("modal--is-visible");
	}

}

export default Modal;
