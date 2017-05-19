import TheMobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import BackToTop from "./modules/BackToTop";
import Modal from "./modules/Modal";


var mobMenu = new TheMobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
new RevealOnScroll($(".back-to-top"), "75%");
var stickyHeader = new StickyHeader();
var backToTop = new BackToTop();
var modal = new Modal();
