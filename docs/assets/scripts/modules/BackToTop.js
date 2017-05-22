import $ from "jquery";
import smoothScroll from 'jquery-smooth-scroll';
class BackToTop {
	constructor() {
		this.topLinks =$(".back-to-top");
		this.addSmoothScrolling();
	}
	addSmoothScrolling() {
		this.topLinks.smoothScroll();
	}
}

export default BackToTop;
