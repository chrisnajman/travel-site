import TheMobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import BackToTop from "./modules/BackToTop";
import Modal from "./modules/Modal";
import AddClasses from "./modules/AddClasses";



var mobMenu = new TheMobileMenu();
new AddClasses($(".large-hero__image"),"large-hero__image--visible" );
new AddClasses($(".large-hero__title"),"animated fadeInUp" );
new AddClasses($(".large-hero__subtitle"),"animated fadeInLeft" );
new AddClasses($(".large-hero__description"),"animated fadeInRight" );
new AddClasses($(".large-hero__text-content .btn "),"animated fadeInUp" );

new RevealOnScroll($(".our-beginning__main-heading"), "85%", "animated fadeInDown" );
new RevealOnScroll($(".our-beginning__sub-heading"), "100%", "animated fadeInUp" );
new RevealOnScroll($(".our-beginning__main-image"), "85%", "animated fadeInRight" );
new RevealOnScroll($(".our-beginning__sub-image"), "85%", "animated fadeInLeft" );
new RevealOnScroll($(".our-beginning__text"), "85%", "animated fadeInRight" );
new RevealOnScroll($(".feature-item"), "85%", "animated fadeInDown" );
new RevealOnScroll($(".testimonial"), "60%", "animated fadeInUp");
new RevealOnScroll($(".back-to-top"), "100%", "animated fadeInDown");
var stickyHeader = new StickyHeader();
var backToTop = new BackToTop();
var modal = new Modal();  

