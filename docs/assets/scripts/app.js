import TheMobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import BackToTop from "./modules/BackToTop";
import Modal from "./modules/Modal";


var mobMenu = new TheMobileMenu();
new RevealOnScroll($(".feature-item"), "85%", "animated fadeInDown" );
new RevealOnScroll($(".testimonial"), "60%", "animated fadeInDown");
new RevealOnScroll($(".back-to-top"), "100%", "animated fadeInDown");
var stickyHeader = new StickyHeader();
var backToTop = new BackToTop();
var modal = new Modal();  

