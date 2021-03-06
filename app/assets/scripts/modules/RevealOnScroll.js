import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
class RevealOnScroll {
 	constructor(els, offset, animation) {
 		this.itemsToAnimate = els;
		this.offsetPercentage = offset;
 		this.animation = animation;
 		this.hideInitially(); 
 		// run the method hideInitially when the page loads
 		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToAnimate.addClass("reveal-item");
	}
	createWaypoints() {
		var that = this; 
		var them = this;
		this.itemsToAnimate.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass(them.animation, "reveal-item--is-visible");
		 		},
				offset: that.offsetPercentage 
			});
		});
	}
}
export default RevealOnScroll;