import TheMobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";


var mobMenu = new TheMobileMenu();
// var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();

// import FadeInPullUp from "./modules/FadeInUp";
// var fadeinPullup = new FadeInPullUp();

// import $ from 'jquery';

// $(document).ready(function() {

// // Extend Jquery with a function to know if elements are on screen
//       // Returns true or false
//       $.fn.is_on_screen = function(){
//           var win = $(window);
//           var viewport = {
//               top : win.scrollTop(),
//               left : win.scrollLeft()
//           };
//           viewport.right = viewport.left + win.width();
//           viewport.bottom = viewport.top + win.height();
       
//           var bounds = this.offset();
//           bounds.right = bounds.left + this.outerWidth();
//           bounds.bottom = bounds.top + this.outerHeight();
//           /*
//           return (!(viewport.right < bounds.left 
//             || viewport.left > bounds.right 
//             || viewport.bottom < bounds.top + 10
//             || viewport.top > bounds.bottom));
//           */
//           if (viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top + 10 || viewport.top > bounds.bottom) {
//             return false;
//           }
//           else {
//             return true;
//           }
          
//       };


   
//       // Animate Blocks on scroll and on screen
//       function animateBlock() {
//         $('.content-fade-in').each( function() {
//           if ( (!$(this).hasClass('block-animated')) && $(this).is_on_screen()) {
//             $(this).addClass('fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

//                 $(this).removeClass('fadeIn');
//                 $(this).addClass('block-animated');
//             });
//           }
//         });

//         $('.content-fade-in-up').each( function() {
//           if ( (!$(this).hasClass('block-animated')) && $(this).is_on_screen()) {
//             $(this).addClass('fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

//                 $(this).removeClass('fadeInUp');
//                 $(this).addClass('block-animated');
//             });
//           }
//         });
//       }
//       // On window load because we need to wait for everything to get built
//       $(window).on("load", function() {
//         animateBlock();
//       });
//       $(window).on("scroll", function() {
//         animateBlock();
//       });

// });